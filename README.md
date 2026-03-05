# AI-chatbot
# AI Campus Assistant

AI Campus Assistant is an AI-powered platform designed to help university students manage their academic life more efficiently. The application combines artificial intelligence with productivity tools to simplify everyday campus activities such as attendance tracking, doubt solving, study planning, and more.

This project is currently under active development and new features are being added continuously.

---

## Features

### AI Doubt Solver

Students can ask academic or programming-related questions and receive AI-generated explanations instantly.

### Attendance Tracking

Track subject-wise attendance and visualize progress with easy-to-understand metrics.

### Class Schedule

Manage and view daily or weekly class schedules in a structured interface.

### AI Study Planner

Generate personalized study plans using AI based on subjects, deadlines, and workload.

### Smart Announcements

Receive important academic announcements and reminders in one place.

### AI Resume Analyzer

Upload resumes and get AI-driven feedback to improve structure, clarity, and impact.

### Campus Chatbot

An AI assistant designed to answer campus-related queries and guide students.

### Event Polling

Create and participate in campus event polls to coordinate activities and student engagement.

---

## Tech Stack

Frontend

* React
* TypeScript
* Vite

Backend

* FastAPI (Python)

AI Integration

* AI API for question answering and explanations

Authentication

* Firebase Authentication *(Google login integration coming soon)*

---

## Project Structure

```
src
 ├ pages
 │   ├ Login.tsx
 │   ├ Dashboard.tsx
 │   └ DoubtSolver.tsx
 │
 ├ firebase.ts
 ├ App.tsx
 └ main.tsx
```

---

## Installation

Clone the repository:

```
git clone https://github.com/your-username/ai-campus-assistant.git
```

Navigate to the project directory:

```
cd ai-campus-assistant
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

The application will start on:

```
http://localhost:5173
```

---

## Backend Setup

Navigate to the backend folder and create a virtual environment:

```
python -m venv venv
```

Activate the environment:

Windows:

```
venv\Scripts\activate
```

Install dependencies:

```
pip install fastapi uvicorn
```

Run the backend server:

```
uvicorn main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

## Current Status

Implemented:

* AI Doubt Solver
* FastAPI AI backend
* React frontend interface
* Chat-style AI interaction UI

In Progress:

* Google Authentication
* Dashboard analytics
* Attendance tracking module
* Study planner integration

---

## Future Improvements

* Real-time notifications
* AI-powered academic recommendations
* Mobile responsive optimization
* File and voice input for AI queries
* Enhanced UI with gamified elements

---

## Contributing

Contributions are welcome. Feel free to fork the repository and submit pull requests for improvements or new features.

---

## License

This project is open-source and available under the MIT License.
