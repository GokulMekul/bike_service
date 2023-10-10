// NotFound.js

import React from 'react';
import './NotFound.css'; // Import your CSS styles for the NotFound page

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-header">404 - Page Not Found</h1>
      <p className="not-found-text">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}

export default NotFound;
