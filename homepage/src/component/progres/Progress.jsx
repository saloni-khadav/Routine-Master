


import React, { useState } from "react";
import './Progress.css';  
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import dayjs from "dayjs";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Progress = () => {
  
  const [tasks] = useState([
    { task: "Task 1", progress: 0 },
    { task: "Task 2", progress: 20 },
    { task: "Task 3", progress: 30 },
    { task: "Task 4", progress: 40 },
    { task: "Task 5", progress: 50 },
    { task: "Task 6", progress: 60 },
    { task: "Task 7", progress: 70 },
    { task: "Task 8", progress: 80 },
    { task: "Task 9", progress: 90 },
    { task: "Task 10", progress: 100 },
    { task: "Task 1", progress: 5 },
    { task: "Task 2", progress: 20 },
    { task: "Task 3", progress: 30 },
    
   
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
          "rgba(255, 159, 64, 0.6)", 
          "rgba(0, 255, 0, 0.6)", 
          "rgba(0, 0, 255, 0.6)", 
          "rgba(255, 0, 255, 0.6)", 
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.6)", 
          "rgba(54, 162, 235, 0.6)", 
          "rgba(255, 206, 86, 0.6)", 
          "rgba(75, 192, 192, 0.6)", 
          "rgba(153, 102, 255, 0.6)", 
          "rgba(255, 159, 64, 0.6)", 
          "rgba(0, 255, 0, 0.6)", 
          "rgba(0, 0, 255, 0.6)", 
          "rgba(255, 0, 255, 0.6)", 
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

  return (
    <div className="container">
      
     
      <div className="header">
        <h2>Progress Tracker</h2>
        <p>{`Date: ${todayDate} | Day: ${todayDay}`}</p>
      </div>

     
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>

      <button className="btn"> Switch</button>
      
    </div>
  );
};

export default Progress;
