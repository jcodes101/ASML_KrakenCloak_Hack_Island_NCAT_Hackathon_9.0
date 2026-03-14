import cv2
import asyncio
import threading
import numpy as np
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from processor import KrakenProcessor
from sync_engine import SyncEngine

app = FastAPI()
processor = KrakenProcessor()
engine = SyncEngine(max_offset_ms=50)
latest_pair = None
# To test solo, we use one camera to feed both buffers
# In the real demo, these will be two different RTSP/HTTP URLs
cap = cv2.VideoCapture(0)

cam_a = cv2.VideoCapture("http://172.20.10.8/stream")
cam_b = cv2.VideoCapture("http://172.20.10.10/stream")

def camera_reader():
    global latest_pair

    while True:
        ret_a, frame_a = cam_a.read()
        ret_b, frame_b = cam_b.read()

        if ret_a:
            engine.add_frame_a(frame_a)

        if ret_b:
            engine.add_frame_b(frame_b)

        pair = engine.get_synced_pair()

        if pair:
            latest_pair = pair

# def camera_reader():
#     """Continuously pulls frames and feeds the SyncEngine."""
#     while True:
#         ret_a, frame_a = cam_a.read()
#         ret_b, frame_b = cam_b.read()

#         if ret_a:
#             engine.add_frame_a(frame_a)
#         if ret_b:
#             engine.add_frame_b(frame_b)
#         # success, frame = cap.read()
#         # if success:
#         #     # We add the same frame to both to simulate a perfect sync
#         #     # In the real world, Camera A and B arrive at different times
#         #     engine.add_frame_a(frame)
#         #     engine.add_frame_b(frame)
#         # cv2.waitKey(1)

# Start the background thread
threading.Thread(target=camera_reader, daemon=True).start()

def get_stream_a():
    global latest_pair

    while True:
        if latest_pair is None:
            continue

        frame_a, frame_b, offset = latest_pair

        processed_a = processor.process_frame(frame_a)

        cv2.putText(
            processed_a,
            f"Sync Offset: {offset*1000:.1f}ms",
            (20,40),
            cv2.FONT_HERSHEY_SIMPLEX,
            1,
            (0,255,0),
            2
        )

        _, buffer = cv2.imencode('.jpg', processed_a)

        yield (
            b'--frame\r\n'
            b'Content-Type: image/jpeg\r\n\r\n' +
            buffer.tobytes() +
            b'\r\n'
        )


def get_stream_b():
    global latest_pair

    while True:
        if latest_pair is None:
            continue

        frame_a, frame_b, offset = latest_pair

        _, buffer = cv2.imencode('.jpg', frame_b)

        yield (
            b'--frame\r\n'
            b'Content-Type: image/jpeg\r\n\r\n' +
            buffer.tobytes() +
            b'\r\n'
        )

@app.get("/video_feed_a")
async def video_feed_a():
    return StreamingResponse(
        get_stream_a(),
        media_type="multipart/x-mixed-replace; boundary=frame"
    )


@app.get("/video_feed_b")
async def video_feed_b():
    return StreamingResponse(
        get_stream_b(),
        media_type="multipart/x-mixed-replace; boundary=frame"
    )

@app.post("/calibrate")
async def calibrate():
    """Endpoint for your React 'Calibrate' button."""
    success, frame = cap.read()
    if success:
        processor.capture_background(frame)
        return {"status": "success"}
    return {"status": "failed"}






    
'''
-   How to tie it all together
Now, your main.py needs to run three things at once:

A thread/task to pull from Camera A.

A thread/task to pull from Camera B.

The FastAPI stream that asks the SyncEngine for a pair, merges them, and applies the KrakenProcessor.
'''
# You need to serve this processed video so your React <img> tag can see it.