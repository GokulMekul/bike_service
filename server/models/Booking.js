// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  email: String,
  serviceDate: Date,
  bikeModel: String,
  selectedService: String,
  status: String, // Add this field
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
