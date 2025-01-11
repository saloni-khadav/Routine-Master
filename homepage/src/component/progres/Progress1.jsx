



import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import dayjs from "dayjs";
import './Progress1.css';  // Make sure to include this CSS file

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Progress1 = () => {
  // Sample data for weekly progress
  const [weekData] = useState([
    { day: "Mon", progress: 0 },
    { day: "Tue", progress: 10 },
    { day: "Wed", progress: 20 },
    { day: "Thu", progress: 40 },
    { day: "Fri", progress: 60 },
    { day: "Sat", progress: 80 },
    { day: "Sun", progress: 90 },
  ]);

  // Get the current date and day
  const today = dayjs();
  const todayDate = today.format("MMMM D, YYYY");
  const todayDay = today.format("dddd");

  // Data for the Bar Chart
  const data = {
    labels: weekData.map((day) => day.day), // Days of the week
    datasets: [
      {
        label: "Progress %",
        data: weekData.map((day) => day.progress), // Progress data
        backgroundColor: weekData.map((day) => {
          const progress = day.progress;
          if (progress <= 10) return "rgba(255, 99, 132, 0.6)"; // Red for low progress
          if (progress <= 20) return "rgba(160, 244, 185, 0.6)";
          if (progress <= 30) return "rgba(255, 206, 86, 0.6)"; // Yellow for medium progress
          if (progress <= 40) return "rgba(247, 163, 234, 0.6)";
          if (progress <= 50) return "rgba(75, 192, 192, 0.6)"; // Green for moderate progress
          if (progress <= 60) return "rgba(132, 130, 130, 0.6)";
          if (progress <= 70) return "rgba(54, 162, 235, 0.6)"; // Blue for good progress
          if (progress <= 80) return "rgba(247, 134, 134, 0.6)";
          if (progress <= 90) return "rgba(146, 232, 244, 0.6)";
          if (progress <= 100) return "rgba(161, 129, 164, 0.6)";
          return "rgba(153, 102, 255, 0.6)"; // Purple for high progress
        }),
        borderColor: weekData.map((day) => {
          const progress = day.progress;
          if (progress <= 10) return "rgba(255, 99, 132, 1)";
          if (progress <= 20) return "rgba(65, 202, 106, 0.6)";
          if (progress <= 30) return "rgb(236, 192, 79)";
          if (progress <= 40) return "rgba(232, 95, 212, 0.6)";
          if (progress <= 50) return "rgb(59, 181, 181)";
          if (progress <= 60) return "rgba(86, 78, 78, 0.6)";
          if (progress <= 70) return "rgba(54, 162, 235, 1)";
          if (progress <= 80) return "rgba(193, 82, 82, 0.6)";
          if (progress <= 90) return "rgba(101, 174, 184, 0.6)";
          if (progress <= 100) return "rgba(161, 51, 169, 0.6)";
          return "rgba(153, 102, 255, 1)";
        }),
        borderWidth: 1,
      },
    ],
  };

  // Options for the Bar Chart
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // The maximum value for progress
      },
    },
  };

  return (
    <div className="weekly-container">
      {/* Header with current date and day */}
      <div className="header">
        <h2>Weekly Progress Tracker</h2>
        <p>{`Date: ${todayDate} | Day: ${todayDay}`}</p>
      </div>

      {/* Progress Chart */}
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
      <button className="btnn"> Switch</button>
    </div>
    
  );  
};

export default Progress1;


