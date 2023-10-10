// routes/bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Endpoint for creating a new booking
router.post('/bookings', async (req, res) => {
  const { email, serviceDate, bikeModel, selectedService,status } = req.body;

  try {
    const newBooking = new Booking({
      email,
      serviceDate,
      bikeModel,
      selectedService,
      status,
    });

    await newBooking.save();

    res.status(201).json({ message: 'Booking successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Booking failed. Please try again later.' });
  }
});

// Endpoint for fetching previous bookings by email
router.get('/bookings', async (req, res) => {
  const { email } = req.query;

  try {
    const previousBookings = await Booking.find({ email });

    res.status(200).json(previousBookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch previous bookings.' });
  }
});



module.exports = router;
