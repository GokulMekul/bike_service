import React, { useEffect, useState } from 'react';
import ServiceBookingForm from './ServiceBookingForm';
import axios from 'axios';
import Header from './Header';
import './Register.css'

function ServiceDashboard({ userEmail }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('Pending');
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    // Fetch user's previous bookings based on their email
    axios
      .get(`/api/bookings?email=${userEmail}`)
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
        setLoading(false);
      });
  }, [userEmail]);

  const handleCancelBooking = async (bookingId) => {
    try {
      const response = await axios.delete(`/api/bookings/${bookingId}`);
      if (response.status === 204) {
        // Booking was successfully canceled, update the list
        fetchBookings();
      }
    } catch (error) {
      console.error('Error canceling booking:', error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`/api/bookings?email=${userEmail}`);
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString(); // Adjust format as needed
    return formattedDate;
  };

  return (
    <div>
      <Header/>
      <h2 id='welcomeondash'>Welcome, {userEmail}!</h2>
      <ServiceBookingForm userEmail={userEmail} fetchBookings={fetchBookings} />

      <h3 id="previousbooking"> Your Previous Bookings</h3>
      {loading ? (
        <p id="loading">Loading...</p>
      ) : (
        <>
          {bookings.length === 0 ? (
            <p id='byfs'>Book your first service</p>
          ) : (
          
             <ul id='ulbooking'>
{bookings.map((booking) => (
  <li
    key={booking._id}
    id='libooking'
    className={`libooking ${booking.status.toLowerCase()}`}
  >
    Service Date: {formatDate(booking.serviceDate)}, Bike Model: {booking.bikeModel}, Service Type: {booking.selectedService}
    <div className='lidiv'>Status: {booking.status}</div>
    <button className='libtn' onClick={() => handleCancelBooking(booking._id)}>Cancel</button>
  </li>
))}


           </ul>
            
          )}
        </>
      )}
      {/* Rest of the dashboard content */}
    </div>
  );
}

export default ServiceDashboard;


  








