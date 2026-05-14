# 🚀 PrepWiz — AI-Powered Interview Preparation Platform

PrepWiz is a full-stack MERN application designed to help users prepare for technical interviews through AI-generated interview questions, explanations, and session-based learning workflows.

The platform allows users to create interview preparation sessions, generate role-specific interview questions using AI, pin important questions, and manage their preparation progress through a clean and modern user experience.

---

## 🌐 Live Demo
👉 https://prepwiz.netlify.app/

---

# ✨ Key Features

## 🔐 Authentication & Security

* JWT-based authentication
* Secure password hashing using bcrypt
* Protected API routes using middleware
* Persistent login sessions
* Environment variable based secret management

## 🧠 AI-Powered Interview Preparation

* Generate interview questions based on:

  * Job role
  * Experience level
  * Focus topics
* AI-generated explanations for concept understanding
* Dynamic content generation using Google Gemini API

## 📁 Session-Based Learning

* Create multiple preparation sessions
* Organize questions session-wise
* Save and revisit previous interview sessions
* Pin important questions for quick revision

## 📸 Profile Management

* Upload and manage profile pictures
* File upload handling using Multer

## 🎨 Modern User Experience

* Responsive UI for desktop and mobile
* Smooth animations using Framer Motion
* Clean and minimal design system
* Fast frontend performance using Vite

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Framer Motion
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Multer

## AI Integration

* Google Gemini API

## Deployment

* Frontend: Netlify
* Backend: Render
* Database: MongoDB Atlas

---

# Highlights

* Designed RESTful APIs using Express.js
* Implemented JWT authentication and route protection
* Structured scalable MongoDB schemas using Mongoose
* Built modular MVC backend architecture
* Integrated Google Gemini API for dynamic AI content generation
* Managed middleware for authentication, CORS, and JSON parsing
* Implemented session-based database design for structured interview workflows
* Configured cloud deployment using Render and MongoDB Atlas
* Managed environment variables securely using dotenv

---

# 📂 Project Structure

```bash
Prepwiz/
│
├── frontend/
│   └── prepwiz/
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── context/
│       │   ├── utils/
│       │   └── assets/
│       ├── public/
│       ├── package.json
│       └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the `backend/` directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

---

# 🔌 API Endpoints

## Authentication

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login existing user |
| GET    | `/api/auth/profile`  | Get user profile    |

## Sessions

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/sessions`     | Get all sessions   |
| POST   | `/api/sessions`     | Create new session |
| DELETE | `/api/sessions/:id` | Delete session     |

## Questions & AI

| Method | Endpoint                       | Description                     |
| ------ | ------------------------------ | ------------------------------- |
| POST   | `/api/ai/generate-questions`   | Generate AI interview questions |
| POST   | `/api/ai/generate-explanation` | Generate concept explanation    |
| GET    | `/api/questions/:sessionId`    | Fetch questions by session      |

---


# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/SV2111004/Prepwiz.git
cd Prepwiz
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:8000
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend/prepwiz
npm install
npm run dev
```



---

# 📌 Future Improvements

* Input validation using Joi/Zod
* Interview analytics dashboard
* Bookmark and revision system
* Mock interview support

---

# 👩‍💻 Built By

Shubhra Varshney


