require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const questionRoutes = require("./routes/questionRoutes");
const { protect } = require("./middleware/authMiddleware");
const {generateInterviewQuestions,generateConceptExplanation} = require("./controllers/aiController");

const app = express();

//middleware to handle CORS
app.use(
  cors({
    origin:"*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],

  })
);

//middleware
app.use(express.json());

connectDB();

//Routes
 app.use("/api/auth", authRoutes);
 app.use("/api/questions", questionRoutes);
 app.use("/api/sessions", sessionRoutes);

 
app.post("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.post("/api/ai/generate-explanation", protect, generateConceptExplanation);

//Server uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

// Start server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});