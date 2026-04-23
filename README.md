# 🎓 Student Feedback and Evaluation System

A full-stack web application designed to collect, manage, and analyze student feedback on courses and instructors. This system helps educational institutions improve teaching quality through structured and anonymous feedback.

---

## 🚀 Features

### 👤 Authentication
- User registration and login
- JWT-based authentication
- Role-based access (Student, Admin, Instructor)

### 📝 Feedback System
- Submit course feedback
- Rating system (1–5)
- Anonymous feedback option
- Comment submission

### 📊 Dashboard & Reports
- View feedback analytics
- Course-based filtering
- Instructor performance insights

---

## 🏗️ Project Structure

student-feedback-system/
│   backend/
    │
    ├── config/                # main project settings
    ├── apps/
    │   ├── accounts/         # authentication & roles
    │   ├── feedback/         # feedback system
    │   ├── notifications/    # notifications
    │   ├── departments/      # department management
    │
    ├── media/                # uploaded files
    ├── requirements.txt
    └── manage.py
<!-- │   └── requirements.txt
├── frontend-web/           # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/     # Reusable UI parts
│   │   ├── pages/          # Full views (Dashboard, Login)
│   │   ├── services/       # API call logic (Axios/Fetch)
│   │   └── hooks/          # Custom React hooks
│   ├── package.json
│   └── tailwind.config.js
├── mobile/                 # Future React Native Folder
├── docs/                   # Documentation
│   ├── db_schema.md        # Database design
│   └── api_endpoints.md    # Documentation for URLs
mobile/
├── src/
│   ├── api/
│   ├── screens/
│   │   ├── student/
│   │   ├── admin/
│   │   ├── department/
│   │   ├── studentAffairs/
│   ├── components/
│   ├── navigation/
│   ├── context/
│   └── utils/
│
├── App.js -->
└── .gitignore

---

## ⚙️ Tech Stack

### Frontend
- React.js
- Axios
- React Router

### Backend
- Django
- Django REST Framework

### Database
- SQLite

### Other Tools
- Git & GitHub
- JWT Authentication

---

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Lido01/sad-feedback-evaluation-system.git
cd sad-feedback-evaluation-system
