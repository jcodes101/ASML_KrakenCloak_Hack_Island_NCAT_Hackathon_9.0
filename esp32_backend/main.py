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

# To test solo, we use one camera to feed both buffers
# In the real demo, these will be two different RTSP/HTTP URLs
cap = cv2.VideoCapture(0)

def camera_reader():
    """Continuously pulls frames and feeds the SyncEngine."""
    while True:
        success, frame = cap.read()
        if success:
            # We add the same frame to both to simulate a perfect sync
            # In the real world, Camera A and B arrive at different times
            engine.add_frame_a(frame)
            engine.add_frame_b(frame)
        cv2.waitKey(1)

# Start the background thread
threading.Thread(target=camera_reader, daemon=True).start()

def get_combined_stream():
    """Pulls synced pairs, processes them, and encodes for React."""
    while True:
        pair = engine.get_synced_pair()
        if pair:
            frame_a, frame_b, offset = pair
            
            # 1. Apply the Kraken-Cloak (Masking)
            # We process Frame A, then show Frame B as the 'raw' reference
            processed_a = processor.process_frame(frame_a)
            
            # 2. Create a Side-by-Side Composite
            # Ensure they are the same height
            h, w, _ = processed_a.shape
            frame_b_resized = cv2.resize(frame_b, (w, h))
            composite = np.hstack((processed_a, frame_b_resized))
            
            # 3. Add 'Sync Offset' overlay for the judges
            cv2.putText(composite, f"Sync Offset: {offset*1000:.1f}ms", 
                        (20, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

            _, buffer = cv2.imencode('.jpg', composite)
            yield (b'--frame\r\nContent-Type: image/jpeg\r\n\r\n' + buffer.tobytes() + b'\r\n')

@app.get("/video_feed")
async def video_feed():
    return StreamingResponse(get_combined_stream(), 
                             media_type="multipart/x-mixed-replace; boundary=frame")

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