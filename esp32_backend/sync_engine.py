import time
from collections import deque

class SyncEngine:
    def __init__(self, max_offset_ms=50):
        # We store (timestamp, frame) tuples
        self.buffer_a = deque(maxlen=30)
        self.buffer_b = deque(maxlen=30)
        self.max_offset = max_offset_ms / 1000.0  # Convert to seconds

    def add_frame_a(self, frame):
        self.buffer_a.append((time.time(), frame))

    def add_frame_b(self, frame):
        self.buffer_b.append((time.time(), frame))

    def get_synced_pair(self):
        if not self.buffer_a or not self.buffer_b:
            return None

        # Look at the oldest frame in A
        ts_a, frame_a = self.buffer_a[0]
        
        # Find the frame in B closest to ts_a
        best_diff = float('inf')
        best_index_b = -1

        for i, (ts_b, _) in enumerate(self.buffer_b):
            diff = abs(ts_a - ts_b)
            if diff < best_diff:
                best_diff = diff
                best_index_b = i
        
        # If the closest match is within our "Sync Window"
        if best_diff <= self.max_offset:
            # Pop everything up to the match to keep buffer clean
            self.buffer_a.popleft()
            # Retrieve the matched frame from B
            _, frame_b = self.buffer_b[best_index_b]
            
            # Clean up buffer B: remove old frames before the match
            for _ in range(best_index_b + 1):
                self.buffer_b.popleft()
                
            return frame_a, frame_b, best_diff
        
        # If ts_a is too old and no match was found in B, drop it
        if ts_a < (time.time() - self.max_offset):
            self.buffer_a.popleft()
            
        return None

# The "Winning Move" here is using a Timestamp-based Queue. 
# Instead of just taking the last frame (which might be 200ms apart), we look for the pair with the smallest time difference.