import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import './Register.css';
import emailjs from 'emailjs-com';

// Configure Email.js with your service ID, template ID, and user ID
emailjs.init('F12BsOLUUyJoVTlfD'); // Replace with your actual Email.js user ID

function ServiceBookingForm({ userEmail, fetchBookings }) {
  const [serviceDate, setServiceDate] = useState('');
  const [bikeModel, setBikeModel] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailParams = {
        to_email: 'gokulmekul@gmail.com', // Replace with the recipient's email
        from_name: userEmail, // Replace with your name or sender's name
        service_date: serviceDate,
        bike_model: bikeModel,
        service_type: selectedService,
      };

      await emailjs.send('service_exm1b0h', 'template_7geqssa', emailParams); // Replace with your service and template IDs
      const response = await axios.post('/api/bookings', {
        email: userEmail,
        serviceDate,
        bikeModel,
        selectedService,
        status: 'Pending',
      });
      console.log('Response status:', response.status);
      if (response.status === 201) {
        setMessage('Booked successfully.');

        // Clear form fields or reset the form as needed
        setServiceDate('');
        setBikeModel('');
        setSelectedService('');

        // Automatically clear the success message after 3 seconds
        setTimeout(() => {
          setMessage('');
        }, 5000);
        fetchBookings();
      }
    } catch (error) {
      console.error('Booking and email sending failed:', error);
      setMessage('Booking and email sending failed. Please try again later.');
    }
  };
  return (
    <div >
      <div className="soc">
        <h3>Cost Of services</h3>
        <p>Water Wash - Rs.500</p>
        <p>Oil Wash - Rs.1000</p>
        <p>General Checkup- Rs.800</p>
      </div>
      <div className="soc">
        <h3>Delivery</h3>
        <p>Normal Delivery in 3 days</p>
        <p>Fast Delivery in 1 day</p>
        <p>Urgent Within a 2 hour</p>
      </div>
       <div className="soc">
        <h3>Special Care</h3>
        <p> Expertise</p>
        <p>24/7 Customer Care</p>
        <p>Trust And Love </p>
      </div>
      <h3 id='pyb'>Place Your Booking Here</h3>
      <div id="bookingbackground">
      
      <h3 id="bookingformh3">Book Service</h3>
      
      <form onSubmit={handleSubmit} id="bookingform">
        <div>
          <label htmlFor="email" >Email:</label>
          <input  className='bookinginput'
            type="email"
            id="email"
            value={userEmail}
            required
          />
        </div>
        <div>
          <label htmlFor="serviceDate">Service Date:</label>
          <input
          className='bookinginput'
            type="date"
            id="serviceDate"
            value={serviceDate}
            onChange={(e) => setServiceDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bikeModel">Bike Model:</label>
          <input
          className='bookinginput'
            type="text"
            id="bikeModel"
            value={bikeModel}
            onChange={(e) => setBikeModel(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="selectedService">Service Type:</label>
          <select
            className='bookinginput'
            id="selectedService"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
          >
            <option value="">Select Service Type</option>
            <option value="General Service Checkup">General Service Checkup</option>
            <option value="Oil Wash">Oil Wash</option>
            <option value="Water Wash">Water Wash</option>
          </select>
        </div>
        <button type="submit" id="bookingformbutton">Book Service</button>
      </form>
      <h3 id='bookedsuccess'>{message}</h3>
      </div>
    </div>
  );
}

export default ServiceBookingForm; 
 
 