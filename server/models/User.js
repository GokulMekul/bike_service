// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  mobileNumber: String,
  emailAddress: { type: String, unique: true }, // Ensure email addresses are unique
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
