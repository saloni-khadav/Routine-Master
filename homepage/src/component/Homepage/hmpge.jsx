import React,{useState} from 'react';
import { FaCog } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaTasks } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import './hmpge.css';





const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-heading">DAILY SCHEDULE</h1>
        <div className="settings-icon">
          <FaCog size={30} />
        </div>
      </div>
    </div>
  );
};

const Navcll = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();

  const getDatesForMonth = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dates = [];
    for (let day = 1; day <= daysInMonth; day++) {
      dates.push(new Date(year, month, day));
    }
    return dates;
  };

  const dates = getDatesForMonth(currentMonth, currentYear);

  const getVisibleDates = (centerDate, numDates) => {
    const currentIndex = dates.findIndex((date) => date.getDate() === centerDate);
    const startIndex = Math.max(0, currentIndex - Math.floor(numDates / 2));
    const endIndex = Math.min(dates.length, startIndex + numDates);
    return dates.slice(startIndex, endIndex);
  };

  const [visibleDates, setVisibleDates] = useState(getVisibleDates(currentDay, 7));

  const handleScroll = (direction) => {
    const centerDate = visibleDates[Math.floor(visibleDates.length / 2)].getDate();
    const newVisibleDates = getVisibleDates(centerDate + direction, 7);
    setVisibleDates(newVisibleDates);
  };

  // Function to get the day of the week (e.g., "Mon", "Tue")
  const getWeekdayName = (date) => {
    return date.toLocaleString('en-US', { weekday: 'short' }); // Returns "Mon", "Tue", etc.
  };

  return (
    <div className="calendar-container">
      <button className="scroll-button left" onClick={() => handleScroll(-1)}>
        &#8592;
      </button>
      <div className="calendar">
        {visibleDates.map((date) => {
          const isToday = date.getDate() === currentDay;
          const weekday = getWeekdayName(date); // Get weekday for each date
          return (
            <div
              key={date}
              className={`date-box ${isToday ? 'highlight' : ''}`}
            >
              <div className="weekday">{weekday}</div> {/* Display the weekday */}
              <div className="date">{date.getDate()}</div> {/* Display the date */}
            </div>
          );
        })}
      </div>
      <button className="scroll-button right" onClick={() => handleScroll(1)}>
        &#8594;
      </button>
    </div>
  );
};





const Hmpge = () => {
  return (
    <div className="task-list">
      <div className="task-item">
        <FaClipboardList size={50} />
        <span>Daily Schedule</span>
      </div>
      <div className="task-item">
        <FaCalendarAlt size={50} />
        <span>Calendar</span>
      </div>
      <div className="task-item">
        <FaTasks size={50} />
        <span>Task Management</span>
      </div>
      <div className="task-item">
        <FaChartBar size={50} />
        <span>Progress</span>
      </div>
      <div className="task-item">
        <FaUser size={50} />
        <span>Goals</span>
      </div>
      <div className="task-item">
        <FaUser size={50} />
        <span>Profile</span>
      </div>
    </div>
  );
};

const Task = () => {
  return (
    <div className="app-container">
     
      <Navbar></Navbar>
      <Navcll />
      <Hmpge />
    </div>
  );
};

export default Task;


