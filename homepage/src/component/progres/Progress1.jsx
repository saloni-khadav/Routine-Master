import React, { useState } from "react";
import './Progress1.css';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import dayjs from 'dayjs';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Progress1 = () => {
  
  const [tasks] = useState([
    { task: "Task 1", progress: 30 },
    { task: "Task 2", progress: 60 },
    { task: "Task 3", progress: 80 },
    { task: "Task 4", progress: 50 },
    { task: "Task 5", progress: 90 },
    { task: "Task 1", progress: 30 },
    { task: "Task 2", progress: 60 },
    { task: "Task 3", progress: 80 },
    { task: "Task 4", progress: 50 },
    { task: "Task 5", progress: 90 },
    { task: "Task 1", progress: 30 },
    { task: "Task 2", progress: 60 },
    { task: "Task 3", progress: 80 },
   
  ]);

  
  const today = dayjs();
  const todayDate = today.format("MMMM D, YYYY");
  const todayDay = today.format("dddd");

  
  const data = {
    labels: tasks.map((task) => task.task), 
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

  
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  
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

export default Progress1;





