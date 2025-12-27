const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//generate jwt token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public

const registerUser = async (req, res) => {
  try {
    const { name, email, password, profileImageUrl } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profileImageUrl,
    });

    //return useer data with JWT
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profileImageUrl: user.profileImageUrl,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// @desc    Login user
// @route   POST /api/auth/login
// @access  Public

const loginUser = async (req, res) => {
  try {
    //  Extract email & password from request body
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    //  Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    // Compare entered password with hashed password in DB
    // bcrypt.compare returns a promise → await is REQUIRED
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    // If everything is valid, send user data + JWT token
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profileImageUrl: user.profileImageUrl,
      token: generateToken(user._id),
    });
  } catch (error) {
    // Handle unexpected server errors
    console.error("LOGIN ERROR:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};



// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private (Requires JWT)

const getUserProfile = async (req, res) => {
  try {
    // 1️⃣ req.user is set by auth middleware (after verifying JWT)
    // Exclude password field from response
    const user = await User.findById(req.user.id).select("-password");

    // 2️⃣ If user does not exist
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // 3️⃣ Send user profile data
    res.status(200).json(user);
  } catch (error) {
    console.error("GET USER PROFILE ERROR:", error);

    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
module.exports = {registerUser,loginUser,getUserProfile,};
