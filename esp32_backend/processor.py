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

            # Eye landmark indices
            left_eye = range(468, 473)
            right_eye = range(473, 478)

            # Create mask for Kraken cloak
            for indices in [left_eye, right_eye]:
                pts = np.array([[int(landmarks[i].x * w), int(landmarks[i].y * h)] for i in indices])
                cv2.fillPoly(mask, [pts], 255)

            # Apply cloak to a copy of the frame to preserve landmarks overlay
            cloaked_frame = np.where(mask[:, :, None] == 255, self.background, frame)

            # Draw landmarks on top of the cloaked frame
            for i in list(left_eye) + list(right_eye):
                x = int(landmarks[i].x * w)
                y = int(landmarks[i].y * h)
                cv2.circle(cloaked_frame, (x, y), 2, (0, 255, 0), -1)

            return cloaked_frame

        return frame

# This is the code that will actually perform the eye-tracking and masking. 
# By writing this now, you can test it using your laptop's webcam as a placeholder for the ESP32.