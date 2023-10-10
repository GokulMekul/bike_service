import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Header from './Header.js'
function AdminLogin() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const[message,setmessage]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check admin credentials
    if (username === 'john' && email === 'john@gmail.com' && password === 'john12345') {
      // Navigate to the admin service dashboard
      navigate('/abouta');
    } else {
      // Handle invalid credentials
      setmessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div id="adminbackground">
      <div >
     <Header/>
      <div id="adminloginbackground">
      <h2 id="adminlogintext">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className='label' >Username:</label>
          <input
            type="text"
            id="username"
            className='userregisterinput'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required

          />
        </div>
        <div>
          <label htmlFor="email" className='label'>Email:</label>
          <input
            className='userregisterinput'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           
            required
          />
        </div>
        <div>
          <label htmlFor="password" className='label'>Password:</label>
          <input
            type="password"
            className='userregisterinput'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='btn btn-dark' id='adminloginbtn'>Login</button>
      </form>
      <p class="loginmessage">{message}</p>
      </div>
      </div>
    </div>
  );
}

export default AdminLogin;
