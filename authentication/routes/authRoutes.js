const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");
const path = require("path");

router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/signup.html"));
});

// Render Sign-In Page
router.get("/signin", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/signin.html"));
});

// Sign-Up Route
router.post("/signup", authController.signup);

// Sign-In Route
router.post("/signin", authController.signin);

module.exports = router;
