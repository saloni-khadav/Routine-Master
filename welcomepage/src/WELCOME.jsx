import React, { useState } from 'react';
import './App.css'; 

function WelcomePage() {

  const [showDashboard, setShowDashboard] = useState(false);

 
  const handleGetStarted = () => {
    setShowDashboard(true); 
  };

 
  const handleSkip = () => {
    setShowDashboard(true); 
  };

  return (
    <div className="welcome-page">
     
      {showDashboard ? (
        <Dashboard />
      ) : (
        <>
          {/* Skip Button */}
          <button className="skip-button" onClick={handleSkip}>Skip</button>

          {/* Body: Logo and Heading */}
          <div className="content">
           
            <h1>Welcome To Routine Master</h1>
            <img src="logo.png" alt="Logo" className="logo" />
            <p>“ You don't have to be great to start, but you have to start to be great.”</p>
          </div>

          {/* Get Started Button */}
          <button className="get-started-button" onClick={handleGetStarted}>Get Started</button>
        </>
      )}
    </div>
  );
}

// Dashboard component
function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <p>This is where you manage your routines.</p>
    </div>
  );
}

export default WelcomePage;