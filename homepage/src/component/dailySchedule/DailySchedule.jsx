

import React, { useState } from 'react';
import "./DailySchedule.css";

// Task Component
const Task = ({ task, onComplete }) => {
  return (
    <div className="task">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onComplete(task.id)} 
      />
      <span className={task.completed ? 'completed' : ''}>
        {task.name} 
        <span className="task-time">
          ({task.startTime} - {task.endTime})
        </span>
      </span>
    </div>
  );
};

// Main DailySchedule Component
const DailySchedule = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Wake Up', startTime: '7:00 AM', endTime: '7:15 AM', completed: false },
    { id: 2, name: 'Workout', startTime: '8:00 AM', endTime: '9:00 AM', completed: false },
    { id: 3, name: 'Breakfast', startTime: '9:00 AM', endTime: '9:30 AM', completed: false },
    { id: 4, name: 'Work', startTime: '10:00 AM', endTime: '1:00 PM', completed: false },
    { id: 5, name: 'Lunch', startTime: '1:00 PM', endTime: '2:00 PM', completed: false },
    { id: 6, name: 'Relax', startTime: '2:00 PM', endTime: '3:00 PM', completed: false },
    { id: 7, name: 'Dinner', startTime: '7:00 PM', endTime: '8:00 PM', completed: false },
    { id: 8, name: 'Sleep', startTime: '10:00 PM', endTime: '7:00 AM', completed: false },
  ]);

  const handleComplete = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="daily-schedule">
      <h2>Daily Schedule</h2>
      <div className="tasks-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onComplete={handleComplete} />
        ))}
      </div>
    </div>
  );
};

export default DailySchedule;





