import React from 'react';
import './nav.css'; // Import CSS for styling

const nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left"></div>
        <div className="navbar-center">Daily Schedule</div>
        <div className="navbar-right">
          <a href="#" className="settings-link">Settings</a>
        </div>
      </div>
    </nav>
  );
}

export default nav;
