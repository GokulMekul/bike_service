// routes/register.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

router.post('/register', async (req, res) => {
  const { userName, mobileNumber, emailAddress, password } = req.body;

  try {
    // Check if the email address is already registered
    const existingUser = await User.findOne({ emailAddress });

    if (existingUser) {
      return res.status(400).json({ message: 'Email address already registered. Please login.' });
    }

    // Create a new user
    const newUser = new User({
      userName,
      mobileNumber,
      emailAddress,
      password,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'Registration successful. Please login.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed. Please try again later.' });
  }
});

module.exports = router;
