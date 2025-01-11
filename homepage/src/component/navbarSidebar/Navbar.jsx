


// import React from "react";
// import { FaRegUser } from "react-icons/fa"; // Import the FaRegUser icon
// import "./Navbar.css";

// const Navbar=()=>{
//   return(
    
//      <div className="navbar">
//        <h1 className="project-title">Routine Master</h1>
//        <div className="profile-icon">
//        <FaRegUser size={30} />
//        </div>
//      </div>

//   );
// };
// export default Navbar;






// import React from "react";
// import { FaRegUser } from "react-icons/fa"; // Import the FaRegUser icon
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="project-title">
//         <h1 >Routine Master</h1>
//       </div>
      
//       <div className="profile-icon">
//         {/* Link component wraps the icon to navigate to /profile */}
//         <Link to="/profile">
//           <FaRegUser size={30} />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;










// import React from 'react';
// import { FaUserCircle } from 'react-icons/fa'; // Import the profile icon from React Icons
// import './Navbar.css'; // Import the CSS file for styling

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <h1 className="navbar-heading">My App</h1>
//       </div>
//       <div className="navbar-right">
//         <FaUserCircle className="profile-icon" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// import React from 'react';
// import { FaUserCircle } from 'react-icons/fa'; // Import the profile icon from React Icons
// import './Navbar.css'; // Import the CSS file for styling

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="heading-con">
//         <h1 className="navbar-heading">My App</h1>
//       </div>
//       <div className="icon-con">
//         <FaUserCircle className="profile-icon" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








// import React from 'react';
// import { FaUserCircle } from 'react-icons/fa'; // Import the profile icon from React Icons
// import './Navbar.css'; // Import the CSS file for styling

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="heading-con">
//         <h1 className="navbar-heading">My App</h1>
//       </div>
//       <div className="icon-con">
//         <FaUserCircle className="profile-icon" />
//       </div>
//     </nav>
//   );
// };
// export default Navbar;










// import React, { useState } from 'react';
// import { FaBars, FaSun, FaMoon, FaUserCircle } from 'react-icons/fa';
// import './Navbar.css'; // Make sure to create this CSS file to style the navbar

// const Navbar = () => {
//   // State to toggle sidebar visibility
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // State to toggle light/dark mode
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Toggle Sidebar
//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   // Toggle Dark/Light Mode
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.body.classList.toggle('dark-mode', !isDarkMode); // This will change the theme of the page
//   };

//   return (
//     <>
//       <nav className={`navbar ${isDarkMode ? 'dark' : ''}`}>

//        <div className='nav-content'> 
//         <div className="left-div">
//         {/* Left Side - Menu Icon */}
//         <div className="navbar-left">
//           <FaBars onClick={toggleSidebar} className="menu-icon" />
//         </div>

//         {/* Center - Logo */}
//         <div className="navbar-center">
//           <img src="/logo.png" alt="Project Logo" className="logo" />
//         </div>

//         </div>


//         <div className='right-div'>
//         {/* Right Side - Light/Dark Mode & Profile */}
//         <div className="navbar-right">
//           <div onClick={toggleTheme} className="theme-toggle">
//             {isDarkMode ? <FaSun /> : <FaMoon />}
//           </div>
//           <div className="profile-icon">
//             <FaUserCircle />
//           </div>
//         </div>
//         </div>
//         </div>
//       </nav>

//       {/* Sidebar */}
//       {sidebarOpen && (
//         <div className="sidebar">
//           <ul>
//             <li>Daily Schedule</li>
//             <li>Calendar</li>
//             <li>Tasks</li>
//             <li>Settings</li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;








import React, { useState } from 'react';
import { FaBars, FaSun, FaMoon, FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  // State to toggle sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // State to toggle light/dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Toggle Dark/Light Mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode); // This will change the theme of the page
  };

  // Function to handle logout
  const handleLogout = () => {
    // You can add logout logic here (e.g., clearing user session, redirecting, etc.)
    console.log('User logged out');
  };

  return (
    <>
      <nav className={`navbar ${isDarkMode ? 'dark' : ''}`}>
        <div className="nav-content">
          <div className="left-div">
            {/* Left Side - Menu Icon */}
            <div className="navbar-left">
              <FaBars onClick={toggleSidebar} className="menu-icon" />
            </div>

            {/* Center - Logo */}
            <div className="navbar-center">
              <img src="/logo.png" alt="Project Logo" className="logo" />
            </div>
          </div>

          <div className="right-div">
            {/* Right Side - Light/Dark Mode & Profile */}
            <div className="navbar-right">
              <div onClick={toggleTheme} className="theme-toggle">
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </div>
              <div className="profile-icon">
                <FaUserCircle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="sidebar">
          <ul>
            <li>Daily Schedule</li>
            <li>Calendar</li>
            <li>Tasks</li>
            <li>Settings</li>
          </ul>
          {/* Logout Button */}
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      )}
    </>
  );
};

export default Navbar;

