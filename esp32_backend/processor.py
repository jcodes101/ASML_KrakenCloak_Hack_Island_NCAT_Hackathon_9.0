import cv2
import numpy as np
from mediapipe.python.solutions import face_mesh

class KrakenProcessor:
    def __init__(self):
        self.face_mesh = face_mesh.FaceMesh(
            refine_landmarks=True,
            max_num_faces=1
        )
        self.background = None

    def capture_background(self, frame):
        self.background = frame.copy()

    def process_frame(self, frame):
        if self.background is None:
            return frame
        
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = self.face_mesh.process(rgb_frame)

        if results.multi_face_landmarks:
            landmarks = results.multi_face_landmarks[0].landmark
            h, w, _ = frame.shape

            mask = np.zeros((h, w), dtype=np.uint8)

            for indices in [range(468, 473), range(473, 478)]:
                pts = np.array([
                    [int(landmarks[i].x * w), int(landmarks[i].y * h)]
                    for i in indices
                ])
                cv2.fillPoly(mask, [pts], 255)

            frame = np.where(mask[:, :, None] == 255, self.background, frame)

        return frame

# This is the code that will actually perform the eye-tracking and masking. 
# By writing this now, you can test it using your laptop's webcam as a placeholder for the ESP32.