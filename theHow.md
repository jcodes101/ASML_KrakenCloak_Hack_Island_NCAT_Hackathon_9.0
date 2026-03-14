Run the Backend: uvicorn main:app --reload.

Verify via Browser: Go to http://127.0.0.1:8000/video_feed. If you see your webcam, the Python side is working.

Test the Cloak: \* Stand out of the frame.

Hit your /calibrate endpoint (via Postman or your new button).

Step into the frame. Your eyes should now be replaced by the empty wall behind you.

Connect React: Start your Vite dev server and make sure the feed appears in the dashboard.
