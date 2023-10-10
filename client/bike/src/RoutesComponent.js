// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, Link, and Routes from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import AdminLogin from './AdminLogin';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-login" element={<AdminLogin />} />
    </Routes>
  );
};

const RoutesComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/admin-login">Admin Login</Link>
            </li>
          </ul>
        </nav>

        {/* Include the AppRoutes component */}
        <AppRoutes />
      </div>
    </Router>
  );
};

export default RoutesComponent;
