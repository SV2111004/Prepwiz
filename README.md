# 🚀 PrepWiz [PREParation-WIZard] — AI-Powered Interview Preparation Platform


PrepWiz is a full-stack MERN application that helps users prepare for technical interviews using **AI-generated questions, explanations, and session-based learning**.

Users can create interview prep sessions, generate role-specific Q&A using AI, pin important questions, and track progress — all inside a clean, modern UI.

---

## 🌐 Live Demo
👉 https://prepwiz.netlify.app/

---

## 🌟 Features

- 🔐 **Authentication**
  - User signup & login with JWT authentication
  - Secure password hashing using bcrypt

- 🧠 **AI-Powered Question Generation**
  - Generate interview questions based on:
    - Role
    - Experience level
    - Topics to focus on
  - AI-generated explanations for deeper understanding

- 📁 **Session-Based Learning**
  - Create multiple interview prep sessions
  - Each session stores its own questions & answers
  - Pin important questions for quick access

- 🎨 **Modern UI / UX**
  - Responsive design (mobile + desktop)
  - Smooth animations using Framer Motion
  - Clean gradients & glassmorphism effects

- 📸 **Profile Image Upload**
  - Upload and store profile pictures using Multer

---

## 🛠 Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (file uploads)

### AI
- Google Gemini API (for question & explanation generation)

---

## 📂 Project Structure
```text
Prepwiz/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├──pages/
│   │   └── context/
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── utils/
│   ├── uploads/
│   └── server.js
│
└── README.md


```

## ⚙️ Environment Variables

Create a `.env` file inside **backend/**:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key

```
---
## 🚀 Getting Started

1️⃣ Clone the Repository
```
git clone https://github.com/your-username/prepwiz.git
cd prepwiz
```
2️⃣ Install Dependencies

Backend
```
cd backend
npm install
npm run dev
```

Frontend
```
cd frontend/prepwiz
npm install
npm run dev
```

---

👩‍💻 Built By
Shubhra Varshney
