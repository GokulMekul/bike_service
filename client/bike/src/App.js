import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import ServiceDashboard from './ServiceDashboard'; // Import the ServiceDashboard component
import Login from './Login'; // Import the Login component
import Register from './Register'; // Import the Register component
import AdminDashboard from './AdminDashboard';
import AdminLogin from './AdminLogin';
import Abouta from './Abouta';
import './Style.css'
import Home from './Home';
import NotFound from './NotFound';
function App() {
  const [userEmail, setUserEmail] = useState('');

  // Function to set the user's email when they log in
  const handleLogin = (email) => {
    setUserEmail(email);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route
            path="/dashboard"
            element={<ServiceDashboard userEmail={userEmail} />}
          />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminlogin" element ={<AdminLogin/>} />
          {/* Add more routes as needed */}
          <Route path="/abouta" element={<Abouta />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
