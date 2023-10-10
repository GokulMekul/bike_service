import React, { useState } from 'react';
import Header from './Header';
import './Register.css';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router

function RegistrationForm() {
  const [userName, setUserName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', {
        userName,
        mobileNumber,
        emailAddress,
        password,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage('Email already registered. Login.');
    }
  };

  return (
    <div>
      <Header/>
      <div id='registerbackgroundimage'>
      <div id="Userregister">
        <h2 id='userregisterhead'>User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName" className='label'>User Name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              class='userregisterinput'
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="mobileNumber" className='label'>Mobile Number:</label>
            <input
              class='userregisterinput'
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="emailAddress" className='label'>Email Address:</label>
            <input
              class='userregisterinput'
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className='label'>Password:</label>
            <input
              class='userregisterinput'
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" class='btn btn-primary' id='userresgiterbtn'>Register</button>
        </form>
        <p id='userresgistermessage'>
          {message}
          {/* Conditionally render the login link */}
          {message && (
            <span>
              {' '}
              | <Link to="/login">Login</Link>
            </span>
          )}
        </p>
      </div>
      <div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;

