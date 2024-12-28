


import React from "react";
import "./Navcll.css";

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

  return (
    <div className="date-row">
      {dates.map((date) => {
        const isToday = date.getDate() === currentDay;
        return (
          <div
            key={date}
            className={`date-box ${isToday ? "highlight" : ""}`}
          >
            {date.getDate()}
          </div>
        );
      })}
    </div>
  );
};

export default Navcll;

