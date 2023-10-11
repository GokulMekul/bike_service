import React, { useEffect, useState } from 'react';
import './Register.css';
import Header from './Header';
import emailjs from 'emailjs-com'; // Import the emailjs library
 // Replace with your actual Email.js user ID

function Abouta() {
 
const emailjsUserId = process.env.REACT_APP_EMAILJS_USER_ID;
 // Check if it logs the correct user ID

emailjs.init(emailjsUserId);
console.log('Abouta',emailjsUserId);
  const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;

  const emailjsTemplate2Id = process.env.REACT_APP_EMAILJS_TEMPLATE2_ID;

 // Initialize Email.js with the user ID

  const [data, setData] = useState([]);
  const [statusOptions, setStatusOptions] = useState(['Pending', 'Complete']);
  const [editedStatus, setEditedStatus] = useState({});
  const [selectedItemId, setSelectedItemId] = useState(null);

  const fetchData = () => {
    fetch('http://localhost:4000/test')
      .then((response) => response.json())
      .then((newData) => {
        // Set the fetched data in the state
        const modifiedData = newData.map((item) => ({
          ...item,
          serviceDate: new Date(item.serviceDate).toLocaleDateString(),
        }));
        setData(modifiedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    // Fetch data from the server when the component is mounted
    fetchData();

    // Poll for updates every 5 seconds (adjust the interval as needed)
    const intervalId = setInterval(fetchData, 5000);

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, []);

  const handleEditStatus = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleStatusChange = (e) => {
    setEditedStatus({ [selectedItemId]: e.target.value });
  };

  const handleSaveStatus = () => {
    // Send a request to update the status for the selected item
    const updatedItem = data.find((item) => item._id === selectedItemId);
    if (updatedItem) {
      const updatedStatus = editedStatus[selectedItemId];
      // Send a request to update the status (you should implement this)
      // For example, using fetch or axios
      fetch(`http://localhost:4000/api/bookings/${selectedItemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: updatedStatus }),
      })
        .then((response) => {
          if (response.status === 200) {
            // Successfully updated status
            // You may want to update the local data as well
            const updatedData = data.map((item) =>
              item._id === selectedItemId
                ? { ...item, status: updatedStatus }
                : item
            );
            setData(updatedData);
            setSelectedItemId(null);
              console.log(updatedData);
            // Check if the status changed to 'Complete'
            if (updatedStatus === 'Complete') {
              const emailParams = {
               
                to_email: updatedItem.email, // Recipient's email address
                subject: 'Booking Status Update', // Email subject
                message: 'Your booking status has been updated to Complete.', // Email message
              };
              console.log(updatedItem.email);

              // Send the email
              emailjs
                .send(emailjsServiceId ,emailjsTemplate2Id, emailParams)
                .then((response) => {
                  console.log('Email sent:', response);
                })
                .catch((error) => {
                  console.error('Error sending email:', error);
                });
            }
          }
        })
        .catch((error) => {
          console.error('Error updating status:', error);
        });
    }
  };

  // Filter data into pending and completed bookings
  const pendingBookings = data.filter((item) => item.status === 'Pending');
  const completedBookings = data.filter((item) => item.status === 'Complete');

  const handleDeleteBooking = (itemId) => {
    // Send a request to delete the item from the database
    fetch(`http://localhost:4000/api/bookings/${itemId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 204) {
          // Successfully deleted the item
          // You may want to update the local data as well
          const updatedData = data.filter((item) => item._id !== itemId);
          setData(updatedData);

          // Show an alert
          window.alert('The data was deleted from the database.');
        }
      })
      .catch((error) => {
        console.error('Error deleting booking:', error);
      });
  };

  return (
    <div>
      <Header />
      <div id="admindash">
        <h1 id="bookingdetail">Bookings Detail</h1>

        {data.length === 0 ? (
          <p id='Nobook'>No bookings yet, book now.</p>
        ) : (
          <div>
            <h2 className='pendbook'>Pending Bookings</h2>
            {pendingBookings.length === 0 ? (
              <p>No pending bookings</p>
            ) : (
              <table className="booking-table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Service Date</th>
                    <th>Bike Model</th>
                    <th>Selected Service</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingBookings.map((item) => (
                    <tr key={item._id}>
                      <td>{item.email}</td>
                      <td>{item.serviceDate}</td>
                      <td>{item.bikeModel}</td>
                      <td>{item.selectedService}</td>
                      <td>
                        {selectedItemId === item._id ? (
                          <select
                            value={editedStatus[item._id] || item.status}
                            onChange={handleStatusChange}
                          >
                            {statusOptions.map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        ) : (
                          item.status
                        )}
                      </td>
                      <td>
                        {selectedItemId === item._id ? (
                          <button onClick={handleSaveStatus}>Save</button>
                        ) : (
                          <button onClick={() => handleEditStatus(item._id)}>
                            Edit
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <h2 className='combook'>Completed Bookings</h2>
            {completedBookings.length === 0 ? (
              <p>No completed bookings</p>
            ) : (
              <table className="booking-table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Service Date</th>
                    <th>Bike Model</th>
                    <th>Selected Service</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {completedBookings.map((item) => (
                    <tr key={item._id}>
                      <td>{item.email}</td>
                      <td>{item.serviceDate}</td>
                      <td>{item.bikeModel}</td>
                      <td>{item.selectedService}</td>
                      <td>{item.status}</td>
                      <td>
                        {item.status === 'Complete' ? (
                          <button onClick={() => handleDeleteBooking(item._id)}>
                            Cancel
                          </button>
                        ) : (
                          ''
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Abouta;

/* import React, { useEffect, useState } from 'react';
import './Register.css';
import Header from './Header';
import emailjs from 'emailjs-com'; // Import the emailjs library

// Initialize Email.js with your user ID
const emailjsUserId = process.env.EMAILJS_USER_ID; //????????ERROR
emailjs.init(emailjsUserId); // Replace with your actual Email.js user ID

function Abouta() {
  const [data, setData] = useState([]);
  const [statusOptions, setStatusOptions] = useState(['Pending', 'Complete']);
  const [editedStatus, setEditedStatus] = useState({});
  const [selectedItemId, setSelectedItemId] = useState(null);

  const fetchData = () => {
    fetch('http://localhost:4000/test')
      .then((response) => response.json())
      .then((newData) => {
        // Set the fetched data in the state
        const modifiedData = newData.map((item) => ({
          ...item,
          serviceDate: new Date(item.serviceDate).toLocaleDateString(),
        }));
        setData(modifiedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    // Fetch data from the server when the component is mounted
    fetchData();

    // Poll for updates every 5 seconds (adjust the interval as needed)
    const intervalId = setInterval(fetchData, 5000);

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, []);

  const handleEditStatus = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleStatusChange = (e) => {
    setEditedStatus({ [selectedItemId]: e.target.value });
  };

  const handleSaveStatus = () => {
    // Send a request to update the status for the selected item
    const updatedItem = data.find((item) => item._id === selectedItemId);
    if (updatedItem) {
      const updatedStatus = editedStatus[selectedItemId];
      // Send a request to update the status (you should implement this)
      // For example, using fetch or axios
      fetch(`http://localhost:4000/api/bookings/${selectedItemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: updatedStatus }),
      })
        .then((response) => {
          if (response.status === 200) {
            // Successfully updated status
            // You may want to update the local data as well
            const updatedData = data.map((item) =>
              item._id === selectedItemId
                ? { ...item, status: updatedStatus }
                : item
            );
            setData(updatedData);
            setSelectedItemId(null);
              console.log(updatedData);
            // Check if the status changed to 'Complete'
            if (updatedStatus === 'Complete') {
              const emailParams = {
               
                to_email: updatedItem.email, // Recipient's email address
                subject: 'Booking Status Update', // Email subject
                message: 'Your booking status has been updated to Complete.', // Email message
              };
              console.log(updatedItem.email);

              // Send the email
              emailjs
                .send("service_exm1b0h", "template_oz2vk08", emailParams)
                .then((response) => {
                  console.log('Email sent:', response);
                })
                .catch((error) => {
                  console.error('Error sending email:', error);
                });
            }
          }
        })
        .catch((error) => {
          console.error('Error updating status:', error);
        });
    }
  };

  // Filter data into pending and completed bookings
  const pendingBookings = data.filter((item) => item.status === 'Pending');
  const completedBookings = data.filter((item) => item.status === 'Complete');

  const handleDeleteBooking = (itemId) => {
    // Send a request to delete the item from the database
    fetch(`http://localhost:4000/api/bookings/${itemId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 204) {
          // Successfully deleted the item
          // You may want to update the local data as well
          const updatedData = data.filter((item) => item._id !== itemId);
          setData(updatedData);

          // Show an alert
          window.alert('The data was deleted from the database.');
        }
      })
      .catch((error) => {
        console.error('Error deleting booking:', error);
      });
  };

  return (
    <div>
      <Header />
      <div id="admindash">
        <h1 id="bookingdetail">Bookings Detail</h1>

        {data.length === 0 ? (
          <p id='Nobook'>No bookings yet, book now.</p>
        ) : (
          <div>
            <h2 className='pendbook'>Pending Bookings</h2>
            {pendingBookings.length === 0 ? (
              <p>No pending bookings</p>
            ) : (
              <table className="booking-table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Service Date</th>
                    <th>Bike Model</th>
                    <th>Selected Service</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingBookings.map((item) => (
                    <tr key={item._id}>
                      <td>{item.email}</td>
                      <td>{item.serviceDate}</td>
                      <td>{item.bikeModel}</td>
                      <td>{item.selectedService}</td>
                      <td>
                        {selectedItemId === item._id ? (
                          <select
                            value={editedStatus[item._id] || item.status}
                            onChange={handleStatusChange}
                          >
                            {statusOptions.map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        ) : (
                          item.status
                        )}
                      </td>
                      <td>
                        {selectedItemId === item._id ? (
                          <button onClick={handleSaveStatus}>Save</button>
                        ) : (
                          <button onClick={() => handleEditStatus(item._id)}>
                            Edit
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <h2 className='combook'>Completed Bookings</h2>
            {completedBookings.length === 0 ? (
              <p>No completed bookings</p>
            ) : (
              <table className="booking-table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Service Date</th>
                    <th>Bike Model</th>
                    <th>Selected Service</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {completedBookings.map((item) => (
                    <tr key={item._id}>
                      <td>{item.email}</td>
                      <td>{item.serviceDate}</td>
                      <td>{item.bikeModel}</td>
                      <td>{item.selectedService}</td>
                      <td>{item.status}</td>
                      <td>
                        {item.status === 'Complete' ? (
                          <button onClick={() => handleDeleteBooking(item._id)}>
                            Cancel
                          </button>
                        ) : (
                          ''
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Abouta;

*/