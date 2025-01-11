
import React, { useState, useEffect } from "react";
import "./Goal.css"; 
import { FaEdit, FaTrashAlt } from "react-icons/fa"; 

const Goal = () => {
  const [goals, setGoals] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goalType, setGoalType] = useState("short-term");
  const [editingGoal, setEditingGoal] = useState(null);

  const addGoal = () => {
    if (title && description) {
      const newGoal = {
        id: Date.now(),
        title,
        description,
        type: goalType,
      };
      setGoals([...goals, newGoal]);
      setTitle("");
      setDescription("");
      setGoalType("short-term");
    }
  };

  const editGoal = () => {
    if (editingGoal) {
      const updatedGoals = goals.map((goal) =>
        goal.id === editingGoal.id
          ? { ...goal, title, description, type: goalType }
          : goal
      );
      setGoals(updatedGoals);
      setEditingGoal(null);
      setTitle("");
      setDescription("");
      setGoalType("short-term");
    }
  };

  const deleteGoal = (id) => {
    const filteredGoals = goals.filter((goal) => goal.id !== id);
    setGoals(filteredGoals);
  };

  useEffect(() => {
    if (editingGoal) {
      setTitle(editingGoal.title);
      setDescription(editingGoal.description);
      setGoalType(editingGoal.type);
    }
  }, [editingGoal]);

  return (
    <div className="app-containers">
      <h1>Daily Routine Goals</h1>

      
      <div className="goal-form">
        <input
          type="text"
          placeholder="Goal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Goal Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <select
          value={goalType}
          onChange={(e) => setGoalType(e.target.value)}
        >
          <option value="short-term">Short Term</option>
          <option value="long-term">Long Term</option>
        </select>
        <button onClick={editingGoal ? editGoal : addGoal}>
          {editingGoal ? "Update Goal" : "Add Goal"}
        </button>
      </div>

      
      <div className="goals-list">
        {goals.map((goal) => (
          <div key={goal.id} className="goal-item">
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
            <p>
              <strong>Type: </strong>{goal.type === "short-term" ? "Short Term" : "Long Term"}
            </p>
            <div className="goal-actions">
              <button
                className="edit-btn"
                onClick={() => setEditingGoal(goal)}
              >
                <FaEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteGoal(goal.id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

 export default Goal;
