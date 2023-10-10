const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ emailAddress: email });

    if (!user) {
      // User not found
      return res.status(404).json({ message: 'Email not found. Please register first.' });
    }

    // Check the password
    if (user.password !== password) {
      // Incorrect password
      return res.status(401).json({ message: 'Incorrect password.' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Login failed. Please try again later.' });
  }
});

module.exports = router;
