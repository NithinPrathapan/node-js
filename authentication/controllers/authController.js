const User = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Environment variable for JWT secret
const JWT_SECRET = "your_jwt_secret"; // Replace with a secure secret in production

// Sign-Up Controller
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
    res.render("signup");
  } catch (error) {
    res.status(400).json({ message: "Error in sign-up", error: error.message });
  }
};

// Sign-In Controller
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
// !do above the line
    // Generate JWT
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Sign-in successful", token });
  } catch (error) {
    res.status(400).json({ message: "Error in sign-in", error: error.message });
  }
};
