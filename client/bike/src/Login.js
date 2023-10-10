import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import './Register.css';
import Header from './Header';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate to handle navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Successful login, store the email in local storage
        localStorage.setItem('userEmail', email);
        onLogin(email);
        // Navigate to the dashboard page
        navigate('/dashboard');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('Incorrect password.');
      } else if (error.response && error.response.status === 404) {
        setMessage('Email not found. Please register first.');
      } else {
        setMessage('Login failed. Please try again later.');
      }
    }
  };

  return (
    <div id='loginbackgroundimage' >
      <Header />
      <div >
      <div id="loginbackground">
        <h2 id='logintext'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className='label'>Email:</label>
            <input
              type="email"
              className='userregisterinput'
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className='label'>Password:</label>
            <input
              className='userregisterinput'
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className='btn btn-primary' id='loginbtn'>Login</button>
        </form>
        <p class='loginmessage'>{message}</p>
        
        {/* Render a link to the registration page */}
        <p class='loginmessage'>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
      </div>
    </div>
  );
}

export default Login;





