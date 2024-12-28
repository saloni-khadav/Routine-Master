
// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import './Progress.css';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";


// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const Progress = () => {
  
//   const [tasks, setTasks] = useState([
//     { day: "Day 1", progress: 20 },
//     { day: "Day 2", progress: 40 },
//     { day: "Day 3", progress: 30 },
//     { day: "Day 4", progress: 80 },
//     { day: "Day 5", progress: 10 }
//   ]);

  
//   const data = {
//     labels: tasks.map((task) => task.day),
//     datasets: [
//       {
//         label: "Progress",
//         data: tasks.map((task) => task.progress),
//         borderColor: "rgb(160, 177, 160)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         fill: true
//       }
//     ]
//   };

  
//   const options = {
//     responsive: true,
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100
//       }
//     }
//   };

  
//   const handleStart = () => {
//     alert("Start button clicked");
//   };

//   const handleReset = () => {
//     alert("Reset button clicked");
//   };

//   return (
//     <div className="container">
//       <h2>Daily Progress Tracker</h2>
      
     
//       <div className="chart-container">
//         <Line data={data} options={options} />
//       </div>
      
      
//       <div className="buttons">
//         <button onClick={handleStart} className="btn start-btn">Start</button>
//         <button onClick={handleReset} className="btn reset-btn">Reset</button>
//       </div>
//     </div>
//   );
// };

// export default Progress;


// src/components/ProgressTracking.jsx
import React, { useState } from "react";
import './Progress.css';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
 import dayjs from 'dayjs';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Progress = () => {
  // Task data
  const [tasks] = useState([
    { day: "Day 1", progress: 30 },
    { day: "Day 2", progress: 60 },
    { day: "Day 3", progress: 80 },
    { day: "Day 4", progress: 50 },
    { day: "Day 5", progress: 90 },
    { day: "Day 6", progress: 20 },
    { day: "Day 7", progress: 50 },
     { day: "Day 1", progress: 30 },
    { day: "Day 2", progress: 60 },
    { day: "Day 3", progress: 80 },
    { day: "Day 4", progress: 50 },
    { day: "Day 5", progress: 90 },
    { day: "Day 6", progress: 20 },
    { day: "Day 7", progress: 50 },
    
  ]);

  // Today's date and day
  const today = dayjs();
  const todayDate = today.format("MMMM D, YYYY");
  const todayDay = today.format("dddd");

  // Chart data
  const data = {
    labels: tasks.map((task) => task.day),
    datasets: [
      {
        label: "Task Progress",
        data: tasks.map((task) => task.progress),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  // Button click handlers
  const handleStart = () => {
    alert("Start button clicked");
  };

  const handleReset = () => {
    alert("Reset button clicked");
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Progress Tracker</h2>
        <p>{`Today: ${todayDay}, ${todayDate}`}</p>
      </div>

      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>

      <div className="buttons">
        <button onClick={handleStart} className="btn start-btn">
          Start
        </button>
        <button onClick={handleReset} className="btn reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Progress;
