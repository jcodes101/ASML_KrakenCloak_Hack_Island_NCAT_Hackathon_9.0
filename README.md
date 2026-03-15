# ASML Kraken Cloak

## Project Description

**ASML Kraken Cloak** is a full-stack computer vision demo for real-time **privacy masking** using a “Kraken Cloak” effect. The system uses **dual-synced camera feeds** and **AI-based eye tracking** to replace a person’s eyes in the video with the background, creating an **invisibility-style privacy mask**.

The project demonstrates a real-time **AI-driven vision pipeline** combined with a modern **React dashboard** and **Python backend**.

---

# System Architecture

The project consists of two main components:

- **Frontend:** React + Vite dashboard
- **Backend:** FastAPI computer vision service

---

# Frontend (hincat_9.0_app)

The frontend is a **React + Vite application** that provides the user interface for interacting with the vision system.

### Features

- Marketing-style **home page**
- **Login / signup** authentication UI
- **Dashboard** displaying:
  - Live vision feed from the backend
  - System controls (ex: calibration)
  - Sync status and network information
  - Vision metrics and pipeline visualization

### Technologies Used

- React
- Vite
- Tailwind CSS
- Motion / animation libraries
- React Router

---

# Backend (esp32_backend)

The backend is a **FastAPI service** responsible for computer vision processing and video streaming.

### Core Responsibilities

- Capture video from **two sources**
  - ESP32 camera streams (configurable URLs)
  - Local webcam (for development/testing)
- Synchronize the two video streams using a **SyncEngine**
- Run the **KrakenProcessor** computer vision pipeline
- Serve the processed video feed to the frontend

### Computer Vision Pipeline

The system uses **MediaPipe Face Mesh** to detect facial landmarks and identify the eye regions.

The **Kraken Cloak effect** replaces detected eye regions with a stored background frame to create a privacy-masking illusion.

### Calibration Flow

1. User steps **out of frame**
2. System captures the **background**
3. User steps **back into frame**
4. Eye regions are replaced with background pixels in real time

### API Endpoint

The processed video stream is served at:
/video_feed


This endpoint is consumed by the React dashboard.

---

# Main Features

### Multi-Camera Sync

Temporal alignment of two camera streams to ensure frames match in time.

### AI Eye Tracking

Face mesh landmark detection to precisely locate and isolate eye regions.

### Kraken Cloak Privacy Masking

Dynamic replacement of eye regions with background pixels to create a real-time privacy or invisibility effect.

---

# Summary

**ASML Kraken Cloak** is a proof-of-concept system demonstrating:

- Real-time computer vision
- Dual-camera synchronization
- AI-based facial landmark tracking
- Privacy-focused visual masking
- A full-stack architecture combining **React frontend** and **Python FastAPI backend**

The project showcases how synchronized vision pipelines and AI detection can be used to create **advanced privacy masking technologies in real time**.
