const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Adjust the path as necessary

// User registration
router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(400).send("Username already exists");
    }

    const newUser = new User({
      username: req.body.username,
      password: req.body.password, // Hash this in a real app!
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// User login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user || user.password !== req.body.password) {
      return res.status(401).send("Invalid credentials");
    }

    // Generate a JWT token here
    // const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    res.send("Login successful"); // Include token in the response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Export the router
module.exports = router;
