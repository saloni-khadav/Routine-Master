


// // import React, { useState } from 'react';
// // import './TaskManager.css'; 

// // const TaskManager = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const [taskInput, setTaskInput] = useState('');
// //   const [isAddingTask, setIsAddingTask] = useState(false);
// //   const [editingTaskIndex, setEditingTaskIndex] = useState(null);
// //   const [editingTaskInput, setEditingTaskInput] = useState('');

// //   const addTask = () => {
// //     if (taskInput.trim() === '') return;
// //     setTasks([...tasks, { id: Date.now(), text: taskInput }]);
// //     setTaskInput('');
// //     setIsAddingTask(false);
// //   };

// //   const deleteTask = (id) => {
// //     setTasks(tasks.filter((task) => task.id !== id));
// //   };

// //   const editTask = (index) => {
// //     setEditingTaskIndex(index);
// //     setEditingTaskInput(tasks[index].text);
// //   };

// //   const saveTask = () => {
// //     const updatedTasks = [...tasks];
// //     updatedTasks[editingTaskIndex] = { ...updatedTasks[editingTaskIndex], text: editingTaskInput };
// //     setTasks(updatedTasks);
// //     setEditingTaskIndex(null);
// //     setEditingTaskInput('');
// //   };

// //   const cancelAddTask = () => {
// //     setIsAddingTask(false);
// //     setTaskInput('');
// //   };

// //   return (
// //     <div className="task-manager">
// //       <h1>Task Manager</h1>

// //       {/* Add Task Button */}
// //       {!isAddingTask && (
// //         <button onClick={() => setIsAddingTask(true)} className="add-task-btn">Add Task</button>
// //       )}

// //       {/* Task Input Section */}
// //       {isAddingTask && (
// //         <div className="input-section">
// //           <input
// //             type="text"
// //             value={taskInput}
// //             onChange={(e) => setTaskInput(e.target.value)}
// //             placeholder="Enter your task"
// //           />
// //           <button onClick={addTask} className="save-btn">Save</button>
// //           <button onClick={cancelAddTask} className="cancel-btn">Cancel</button>
// //         </div>
// //       )}

// //       {/* Task List */}
// //       <ul>
// //         {tasks.map((task, index) => (
// //           <li key={task.id} className="task-item">
// //             {editingTaskIndex === index ? (
// //               <div className="edit-section">
// //                 <input
// //                   type="text"
// //                   value={editingTaskInput}
// //                   onChange={(e) => setEditingTaskInput(e.target.value)}
// //                 />
// //                 <button onClick={saveTask} className="save-btn">Save</button>
// //               </div>
// //             ) : (
// //               <span>{task.text}</span>
// //             )}
// //             <div className="action-icons">
// //               <button onClick={() => editTask(index)} className="edit-btn">✏️</button>
// //               <button onClick={() => deleteTask(task.id)} className="delete-btn">🗑️</button>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default TaskManager;









// // // // import React, { useState } from 'react';
// // // // import './TaskManager.css';

// // // // // Modal component to add/edit tasks
// // // // const TaskModal = ({ isOpen, onClose, onSave, taskToEdit }) => {
// // // //   const [taskName, setTaskName] = useState(taskToEdit ? taskToEdit.name : '');
// // // //   const [taskDescription, setTaskDescription] = useState(taskToEdit ? taskToEdit.description : '');
// // // //   const [repeatDays, setRepeatDays] = useState(taskToEdit ? taskToEdit.repeatDays : '');

// // // //   const handleSave = () => {
// // // //     const task = {
// // // //       name: taskName,
// // // //       description: taskDescription,
// // // //       repeatDays: repeatDays ? parseInt(repeatDays) : null,
// // // //       id: taskToEdit ? taskToEdit.id : Date.now(),
// // // //     };
// // // //     onSave(task);
// // // //     onClose();
// // // //   };

// // // //   if (!isOpen) return null;

// // // //   return (
// // // //     <div className="modal">
// // // //       <div className="modal-content">
// // // //         <h2>{taskToEdit ? 'Edit Task' : 'Create Task'}</h2>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Task Name"
// // // //           value={taskName}
// // // //           onChange={(e) => setTaskName(e.target.value)}
// // // //         />
// // // //         <textarea
// // // //           placeholder="Task Description"
// // // //           value={taskDescription}
// // // //           onChange={(e) => setTaskDescription(e.target.value)}
// // // //         />
// // // //         <input
// // // //           type="number"
// // // //           placeholder="Repeat every (days)"
// // // //           value={repeatDays}
// // // //           onChange={(e) => setRepeatDays(e.target.value)}
// // // //         />
// // // //         <div className="modal-actions">
// // // //           <button onClick={handleSave}>{taskToEdit ? 'Update Task' : 'Save Task'}</button>
// // // //           <button onClick={onClose}>Cancel</button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Task component to display individual tasks
// // // // const Task = ({ task, onEdit, onDelete }) => {
// // // //   return (
// // // //     <div className="task">
// // // //       <p><strong>{task.name}</strong></p>
// // // //       <p>{task.description}</p>
// // // //       {task.repeatDays && <p><em>Repeat every {task.repeatDays} days</em></p>}
// // // //       <div className="task-actions">
// // // //         <button onClick={() => onEdit(task)}>Edit</button>
// // // //         <button onClick={() => onDelete(task.id)}>Delete</button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Main TaskManager component
// // // // const TaskManager = () => {
// // // //   const [tasks, setTasks] = useState([]);
// // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // //   const [taskToEdit, setTaskToEdit] = useState(null);

// // // //   const openModal = (task = null) => {
// // // //     setTaskToEdit(task);
// // // //     setIsModalOpen(true);
// // // //   };

// // // //   const closeModal = () => {
// // // //     setIsModalOpen(false);
// // // //     setTaskToEdit(null);
// // // //   };

// // // //   const handleSaveTask = (task) => {
// // // //     if (taskToEdit) {
// // // //       // Update existing task
// // // //       setTasks(tasks.map(t => t.id === taskToEdit.id ? task : t));
// // // //     } else {
// // // //       // Add new task
// // // //       setTasks([...tasks, task]);
// // // //     }
// // // //   };

// // // //   const handleDeleteTask = (id) => {
// // // //     setTasks(tasks.filter(task => task.id !== id));
// // // //   };

// // // //   return (
// // // //     <div className="taskApp">
// // // //       <header>
// // // //         <h1>Task Management</h1>
// // // //         <button onClick={() => openModal()}>+ Add Task</button>
// // // //       </header>

// // // //       <div className="task-container">
// // // //         {tasks.map(task => (
// // // //           <Task
// // // //             key={task.id}
// // // //             task={task}
// // // //             onEdit={openModal}
// // // //             onDelete={handleDeleteTask}
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       <TaskModal
// // // //         isOpen={isModalOpen}
// // // //         onClose={closeModal}
// // // //         onSave={handleSaveTask}
// // // //         taskToEdit={taskToEdit}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TaskManager;










// // import React, { useState } from 'react';
// // import './TaskManager.css';

// // const TaskManager = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const [taskInput, setTaskInput] = useState('');
// //   const [isAddingTask, setIsAddingTask] = useState(false);
// //   const [editingTaskIndex, setEditingTaskIndex] = useState(null);
// //   const [editingTaskInput, setEditingTaskInput] = useState('');
// //   const [repeatDays, setRepeatDays] = useState({});

// //   const addTask = () => {
// //     if (taskInput.trim() === '') return;
// //     setTasks([...tasks, { id: Date.now(), text: taskInput, repeat: [] }]);
// //     setTaskInput('');
// //     setIsAddingTask(false);
// //   };

// //   const deleteTask = (id) => {
// //     setTasks(tasks.filter((task) => task.id !== id));
// //   };

// //   const editTask = (index) => {
// //     setEditingTaskIndex(index);
// //     setEditingTaskInput(tasks[index].text);
// //   };

// //   const saveTask = () => {
// //     const updatedTasks = [...tasks];
// //     updatedTasks[editingTaskIndex] = { ...updatedTasks[editingTaskIndex], text: editingTaskInput };
// //     setTasks(updatedTasks);
// //     setEditingTaskIndex(null);
// //     setEditingTaskInput('');
// //   };

// //   const cancelAddTask = () => {
// //     setIsAddingTask(false);
// //     setTaskInput('');
// //   };

// //   const handleRepeatChange = (taskId, selectedDays) => {
// //     setRepeatDays({
// //       ...repeatDays,
// //       [taskId]: selectedDays,
// //     });

// //     const updatedTasks = tasks.map((task) => {
// //       if (task.id === taskId) {
// //         return { ...task, repeat: selectedDays };
// //       }
// //       return task;
// //     });
// //     setTasks(updatedTasks);
// //   };

// //   const toggleRepeat = (taskId) => {
// //     const currentDays = repeatDays[taskId] || [];
// //     const newDays = currentDays.length === 7 ? [] : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// //     handleRepeatChange(taskId, newDays);
// //   };

// //   return (
// //     <div className="task-manager">
// //       <h1>Task Manager</h1>

// //       {/* Add Task Button */}
// //       {!isAddingTask && (
// //         <button onClick={() => setIsAddingTask(true)} className="add-task-btn">Add Task</button>
// //       )}

// //       {/* Task Input Section */}
// //       {isAddingTask && (
// //         <div className="input-section">
// //           <input
// //             type="text"
// //             value={taskInput}
// //             onChange={(e) => setTaskInput(e.target.value)}
// //             placeholder="Enter your task"
// //           />
// //           <button onClick={addTask} className="save-btn">Save</button>
// //           <button onClick={cancelAddTask} className="cancel-btn">Cancel</button>
// //         </div>
// //       )}

// //       {/* Task List */}
// //       <ul>
// //         {tasks.map((task, index) => (
// //           <li key={task.id} className="task-item">
// //             {editingTaskIndex === index ? (
// //               <div className="edit-section">
// //                 <input
// //                   type="text"
// //                   value={editingTaskInput}
// //                   onChange={(e) => setEditingTaskInput(e.target.value)}
// //                 />
// //                 <button onClick={saveTask} className="save-btn">Save</button>
// //               </div>
// //             ) : (
// //               <span>{task.text}</span>
// //             )}

// //             {/* Repeat Dropdown */}
// //             <div className="repeat-section">
// //               <button onClick={() => toggleRepeat(task.id)} className="repeat-btn">
// //                 {task.repeat.length > 0 ? `Repeat: ${task.repeat.join(', ')}` : 'Repeat'}
// //               </button>
// //               {task.repeat.length > 0 && (
// //                 <div className="repeat-dropdown">
// //                   <label>
// //                     <input
// //                       type="checkbox"
// //                       checked={task.repeat.includes('Monday')}
// //                       onChange={() => handleRepeatChange(task.id, toggleDay(task.repeat, 'Monday'))}
// //                     />
// //                     Monday
// //                   </label>
// //                   <label>
// //                     <input
// //                       type="checkbox"
// //                       checked={task.repeat.includes('Tuesday')}
// //                       onChange={() => handleRepeatChange(task.id, toggleDay(task.repeat, 'Tuesday'))}
// //                     />
// //                     Tuesday
// //                   </label>
// //                   {/* Add more days as necessary */}
// //                 </div>
// //               )}
// //             </div>

// //             <div className="action-icons">
// //               <button onClick={() => editTask(index)} className="edit-btn">✏️</button>
// //               <button onClick={() => deleteTask(task.id)} className="delete-btn">🗑️</button>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // const toggleDay = (currentDays, day) => {
// //   return currentDays.includes(day)
// //     ? currentDays.filter((d) => d !== day)
// //     : [...currentDays, day];
// // };

// // export default TaskManager;







// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';
// import './TaskManager.css';

// const TaskManager = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isFormOpen, setFormOpen] = useState(false);
//   const [editTask, setEditTask] = useState(null);
//   const [taskName, setTaskName] = useState('');
//   const [days, setDays] = useState([]);

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//     setFormOpen(false);
//     setTaskName('');
//     setDays([]);
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   const openEditForm = (task) => {
//     setEditTask(task);
//     setFormOpen(true);
//     setTaskName(task.name);
//     setDays(task.days);
//   };

//   const updateTask = (updatedTask) => {
//     setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
//     setFormOpen(false);
//     setEditTask(null);
//     setTaskName('');
//     setDays([]);
//   };

//   const toggleDay = (day) => {
//     setDays(prevDays =>
//       prevDays.includes(day) ? prevDays.filter(d => d !== day) : [...prevDays, day]
//     );
//   };

//   const handleSave = () => {
//     const newTask = {
//       id: editTask ? editTask.id : Date.now(),
//       name: taskName,
//       days: days
//     };
//     if (editTask) {
//       updateTask(newTask);
//     } else {
//       addTask(newTask);
//     }
//   };

//   return (
//     <div className="task-manager">
//       <h1>Task Management</h1>
//       <button onClick={() => setFormOpen(true)}>Add Task</button>

//       {isFormOpen && (
//         <div className="task-form">
//           <h3>{editTask ? 'Edit Task' : 'Create Task'}</h3>
//           <label>Task Name:</label>
//           <input
//             type="text"
//             value={taskName}
//             onChange={(e) => setTaskName(e.target.value)}
//             placeholder="Enter task name"
//           />

//           <label>Days:</label>
//           <div className="days-container">
//             {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
//               <button
//                 key={day}
//                 onClick={() => toggleDay(day)}
//                 className={days.includes(day) ? 'selected' : ''}
//               >
//                 {day}
//               </button>
//             ))}
//           </div>

//           <div className="form-actions">
//             <button onClick={handleSave}>Save</button>
//             <button onClick={() => setFormOpen(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       <div className="task-list">
//         <h3>Task List</h3>
//         {tasks.length === 0 ? (
//           <p>No tasks available</p>
//         ) : (
//           <ul>
//             {tasks.map((task) => (
//               <li key={task.id}>
//                 <div className="task-item">
//                   <span>{task.name} ({task.days.join(', ')})</span>
//                   <div className="task-actions">
//                     <FaEdit onClick={() => openEditForm(task)} />
//                     <FaTrashAlt onClick={() => deleteTask(task.id)} />
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TaskManager;





// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';
// import Select from 'react-select';
// import './TaskManager.css';

// const TaskManager = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isFormOpen, setFormOpen] = useState(false);
//   const [editTask, setEditTask] = useState(null);
//   const [taskName, setTaskName] = useState('');
//   const [selectedDays, setSelectedDays] = useState([]);

//   const dayOptions = [
//     { value: 'Sunday', label: 'Sunday' },
//     { value: 'Monday', label: 'Monday' },
//     { value: 'Tuesday', label: 'Tuesday' },
//     { value: 'Wednesday', label: 'Wednesday' },
//     { value: 'Thursday', label: 'Thursday' },
//     { value: 'Friday', label: 'Friday' },
//     { value: 'Saturday', label: 'Saturday' },
//   ];

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//     setFormOpen(false);
//     setTaskName('');
//     setSelectedDays([]);
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   const openEditForm = (task) => {
//     setEditTask(task);
//     setFormOpen(true);
//     setTaskName(task.name);
//     setSelectedDays(task.days.map(day => ({ value: day, label: day })));
//   };

//   const updateTask = (updatedTask) => {
//     setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
//     setFormOpen(false);
//     setEditTask(null);
//     setTaskName('');
//     setSelectedDays([]);
//   };

//   const handleSave = () => {
//     const newTask = {
//       id: editTask ? editTask.id : Date.now(),
//       name: taskName,
//       days: selectedDays.map(day => day.value),
//     };
//     if (editTask) {
//       updateTask(newTask);
//     } else {
//       addTask(newTask);
//     }
//   };

//   return (
//     <div className="task-manager">
//       <h1>Task Management</h1>
//       <button onClick={() => setFormOpen(true)}>Add Task</button>

//       {isFormOpen && (
//         <div className="task-form">
//           <h3>{editTask ? 'Edit Task' : 'Create Task'}</h3>
//           <label>Task Name:</label>
//           <input
//             type="text"
//             value={taskName}
//             onChange={(e) => setTaskName(e.target.value)}
//             placeholder="Enter task name"
//           />

//           <label>Repeat on Days:</label>
//           <Select
//             isMulti
//             name="days"
//             options={dayOptions}
//             value={selectedDays}
//             onChange={setSelectedDays}
//             placeholder="Select days"
//           />

//           <div className="form-actions">
//             <button onClick={handleSave}>Save</button>
//             <button onClick={() => setFormOpen(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       <div className="task-list">
//         <h3>Task List</h3>
//         {tasks.length === 0 ? (
//           <p>No tasks available</p>
//         ) : (
//           <ul>
//             {tasks.map((task) => (
//               <li key={task.id}>
//                 <div className="task-item">
//                   <span>{task.name} ({task.days.join(', ')})</span>
//                   <div className="task-actions">
//                     <FaEdit onClick={() => openEditForm(task)} />
//                     <FaTrashAlt onClick={() => deleteTask(task.id)} />
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TaskManager;





















// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';
// import Select from 'react-select';
// import './TaskManager.css';

// const TaskManager = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isFormOpen, setFormOpen] = useState(false);
//   const [editTask, setEditTask] = useState(null);
//   const [taskName, setTaskName] = useState('');
//   const [selectedDays, setSelectedDays] = useState([]);
//   const [startTime, setStartTime] = useState('');
//   const [endTime, setEndTime] = useState('');

//   const dayOptions = [
//     { value: 'Sunday', label: 'Sunday' },
//     { value: 'Monday', label: 'Monday' },
//     { value: 'Tuesday', label: 'Tuesday' },
//     { value: 'Wednesday', label: 'Wednesday' },
//     { value: 'Thursday', label: 'Thursday' },
//     { value: 'Friday', label: 'Friday' },
//     { value: 'Saturday', label: 'Saturday' },
//   ];

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//     setFormOpen(false);
//     setTaskName('');
//     setSelectedDays([]);
//     setStartTime('');
//     setEndTime('');
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   const openEditForm = (task) => {
//     setEditTask(task);
//     setFormOpen(true);
//     setTaskName(task.name);
//     setSelectedDays(task.days.map(day => ({ value: day, label: day })));
//     setStartTime(task.startTime);
//     setEndTime(task.endTime);
//   };

//   const updateTask = (updatedTask) => {
//     setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
//     setFormOpen(false);
//     setEditTask(null);
//     setTaskName('');
//     setSelectedDays([]);
//     setStartTime('');
//     setEndTime('');
//   };

//   const handleSave = () => {
//     const newTask = {
//       id: editTask ? editTask.id : Date.now(),
//       name: taskName,
//       days: selectedDays.map(day => day.value),
//       startTime,
//       endTime,
//     };
//     if (editTask) {
//       updateTask(newTask);
//     } else {
//       addTask(newTask);
//     }
//   };

//   return (
//     <div className="task-manager">
//       <h1>Task Management</h1>
//       <button onClick={() => setFormOpen(true)}>Add Task</button>

//       {isFormOpen && (
//         <div className="task-form">
//           <h3>{editTask ? 'Edit Task' : 'Create Task'}</h3>
//           <label>Task Name:</label>
//           <input
//             type="text"
//             value={taskName}
//             onChange={(e) => setTaskName(e.target.value)}
//             placeholder="Enter task name"
//           />

//           <label>Repeat on Days:</label>
//           <Select
//             isMulti
//             name="days"
//             options={dayOptions}
//             value={selectedDays}
//             onChange={setSelectedDays}
//             placeholder="Select days"
//           />

//           <label>Start Time:</label>
//           <input
//             type="time"
//             value={startTime}
//             onChange={(e) => setStartTime(e.target.value)}
//           />

//           <label>End Time:</label>
//           <input
//             type="time"
//             value={endTime}
//             onChange={(e) => setEndTime(e.target.value)}
//           />

//           <div className="form-actions">
//             <button onClick={handleSave}>Save</button>
//             <button onClick={() => setFormOpen(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       <div className="task-list">
//         <h3>Task List</h3>
//         {tasks.length === 0 ? (
//           <p>No tasks available</p>
//         ) : (
//           <ul>
//             {tasks.map((task) => (
//               <li key={task.id}>
//                 <div className="task-item">
//                   <span>{task.name} ({task.days.join(', ')})</span>
//                   <span>Start: {task.startTime || 'Not set'}</span>
//                   <span>End: {task.endTime || 'Not set'}</span>
//                   <div className="task-actions">
//                     <FaEdit onClick={() => openEditForm(task)} />
//                     <FaTrashAlt onClick={() => deleteTask(task.id)} />
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TaskManager;












// import React, { useState } from 'react';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';
// import Select from 'react-select';
// import './TaskManager.css';

// const TaskManager = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isFormOpen, setFormOpen] = useState(false);
//   const [editTask, setEditTask] = useState(null);
//   const [taskName, setTaskName] = useState('');
//   const [selectedDays, setSelectedDays] = useState([]);
//   const [startTime, setStartTime] = useState({ hour: 10, minute: 0, ampm: 'AM' });
//   const [endTime, setEndTime] = useState({ hour: 11, minute: 0, ampm: 'AM' });

//   const dayOptions = [
//     { value: 'Sunday', label: 'Sunday' },
//     { value: 'Monday', label: 'Monday' },
//     { value: 'Tuesday', label: 'Tuesday' },
//     { value: 'Wednesday', label: 'Wednesday' },
//     { value: 'Thursday', label: 'Thursday' },
//     { value: 'Friday', label: 'Friday' },
//     { value: 'Saturday', label: 'Saturday' },
//   ];

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//     setFormOpen(false);
//     setTaskName('');
//     setSelectedDays([]);
//     setStartTime({ hour: 10, minute: 0, ampm: 'AM' });
//     setEndTime({ hour: 11, minute: 0, ampm: 'AM' });
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   const openEditForm = (task) => {
//     setEditTask(task);
//     setFormOpen(true);
//     setTaskName(task.name);
//     setSelectedDays(task.days.map(day => ({ value: day, label: day })));
//     setStartTime(parseTime(task.startTime));
//     setEndTime(parseTime(task.endTime));
//   };

//   const updateTask = (updatedTask) => {
//     setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
//     setFormOpen(false);
//     setEditTask(null);
//     setTaskName('');
//     setSelectedDays([]);
//     setStartTime({ hour: 10, minute: 0, ampm: 'AM' });
//     setEndTime({ hour: 11, minute: 0, ampm: 'AM' });
//   };

//   const parseTime = (time) => {
//     const [hourMin, ampm] = time.split(' ');
//     let [hour, minute] = hourMin.split(':').map(Number);
//     if (ampm === 'PM' && hour < 12) hour += 12;
//     if (ampm === 'AM' && hour === 12) hour = 0;
//     return { hour, minute, ampm };
//   };

//   const formatTime = (time) => {
//     let { hour, minute, ampm } = time;
//     let formattedHour = hour % 12 || 12;  // Convert 0 to 12 for AM times
//     if (minute < 10) minute = `0${minute}`;
//     return `${formattedHour}:${minute} ${ampm}`;
//   };

//   const handleSave = () => {
//     const newTask = {
//       id: editTask ? editTask.id : Date.now(),
//       name: taskName,
//       days: selectedDays.map(day => day.value),
//       startTime: formatTime(startTime),
//       endTime: formatTime(endTime),
//     };
//     if (editTask) {
//       updateTask(newTask);
//     } else {
//       addTask(newTask);
//     }
//   };

//   return (
//     <div className="task-manager">
//       <h1>Task Management</h1>
//       <button onClick={() => setFormOpen(true)}>Add Task</button>

//       {isFormOpen && (
//         <div className="task-form">
//           <h3>{editTask ? 'Edit Task' : 'Create Task'}</h3>
//           <label>Task Name:</label>
//           <input
//             type="text"
//             value={taskName}
//             onChange={(e) => setTaskName(e.target.value)}
//             placeholder="Enter task name"
//           />

//           <label>Repeat on Days:</label>
//           <Select
//             isMulti
//             name="days"
//             options={dayOptions}
//             value={selectedDays}
//             onChange={setSelectedDays}
//             placeholder="Select days"
//           />

//           <label>Start Time:</label>
//           <div className="time-picker">
//             <select
//               value={startTime.hour}
//               onChange={(e) => setStartTime({ ...startTime, hour: parseInt(e.target.value) })}
//             >
//               {[...Array(12).keys()].map(i => (
//                 <option key={i} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <span >:</span>
//             <select
//               value={startTime.minute}
//               onChange={(e) => setStartTime({ ...startTime, minute: parseInt(e.target.value) })}
//             >
//               {[...Array(60).keys()].map(i => (
//                 <option key={i} value={i}>
//                   {i < 10 ? `0${i}` : i}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={startTime.ampm}
//               onChange={(e) => setStartTime({ ...startTime, ampm: e.target.value })}
//             >
//               <option value="AM">AM</option>
//               <option value="PM">PM</option>
//             </select>
//           </div>

//           <label>End Time:</label>
//           <div className="time-picker">
//             <select
//               value={endTime.hour}
//               onChange={(e) => setEndTime({ ...endTime, hour: parseInt(e.target.value) })}
//             >
//               {[...Array(12).keys()].map(i => (
//                 <option key={i} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <span>:</span>
//             <select
//               value={endTime.minute}
//               onChange={(e) => setEndTime({ ...endTime, minute: parseInt(e.target.value) })}
//             >
//               {[...Array(60).keys()].map(i => (
//                 <option key={i} value={i}>
//                   {i < 10 ? `0${i}` : i}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={endTime.ampm}
//               onChange={(e) => setEndTime({ ...endTime, ampm: e.target.value })}
//             >
//               <option value="AM">AM</option>
//               <option value="PM">PM</option>
//             </select>
//           </div>

//           <div className="form-actions">
//             <button onClick={handleSave}>Save</button>
//             <button onClick={() => setFormOpen(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       <div className="task-list">
//         <h3>Task List</h3>
//         {tasks.length === 0 ? (
//           <p>No tasks available</p>
//         ) : (
//           <ul>
//             {tasks.map((task) => (
//               <li key={task.id}>
//                 <div className="task-item">
//                   <span>{task.name} ({task.days.join(', ')})</span>
//                   <span>Start: {task.startTime || 'Not set'}</span>
//                   <span>End: {task.endTime || 'Not set'}</span>
//                   <div className="task-actions">
//                     <FaEdit onClick={() => openEditForm(task)} />
//                     <FaTrashAlt onClick={() => deleteTask(task.id)} />
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TaskManager;







// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';
// import Select from 'react-select';
// import './TaskManager.css';

// const TaskManager = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isFormOpen, setFormOpen] = useState(false);
//   const [editTask, setEditTask] = useState(null);
//   const [taskName, setTaskName] = useState('');
//   const [selectedDays, setSelectedDays] = useState([]);
//   const [startTime, setStartTime] = useState({ hour: 10, minute: 0, ampm: 'AM' });
//   const [endTime, setEndTime] = useState({ hour: 11, minute: 0, ampm: 'AM' });

//   const dayOptions = [
//     { value: 'Sunday', label: 'Sunday' },
//     { value: 'Monday', label: 'Monday' },
//     { value: 'Tuesday', label: 'Tuesday' },
//     { value: 'Wednesday', label: 'Wednesday' },
//     { value: 'Thursday', label: 'Thursday' },
//     { value: 'Friday', label: 'Friday' },
//     { value: 'Saturday', label: 'Saturday' },
//   ];

//   // Function to get the current time in a 12-hour format with AM/PM
//   const getCurrentTime = () => {
//     const now = new Date();
//     let hours = now.getHours();
//     const minutes = now.getMinutes();
//     let ampm = 'AM';

//     if (hours >= 12) {
//       ampm = 'PM';
//       if (hours > 12) hours -= 12;
//     }
//     if (hours === 0) hours = 12; // midnight case
//     return { hour: hours, minute: minutes, ampm };
//   };

//   useEffect(() => {
//     const currentTime = getCurrentTime();
//     setStartTime(currentTime);
//     setEndTime(currentTime); // Default end time same as start time
//   }, []);


//   const addTask = (task) => {
//     // Get the current time before adding the task
//     const currentTime = getCurrentTime();
    
//     setTasks([...tasks, task]);
//     setFormOpen(false);
//     setTaskName('');
//     setSelectedDays([]);
//     setStartTime(currentTime);  // Reset to current time before adding task
//     setEndTime(currentTime);    // Reset to current time before adding task
//   };
  





//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   const openEditForm = (task) => {
//     setEditTask(task);
//     setFormOpen(true);
//     setTaskName(task.name);
//     setSelectedDays(task.days.map(day => ({ value: day, label: day })));
//     setStartTime(parseTime(task.startTime));
//     setEndTime(parseTime(task.endTime));
//   };

//   const updateTask = (updatedTask) => {
//     setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
//     setFormOpen(false);
//     setEditTask(null);
//     setTaskName('');
//     setSelectedDays([]);
//     setStartTime(getCurrentTime());  // Reset to current time
//     setEndTime(getCurrentTime());    // Reset to current time
//   };

//   const parseTime = (time) => {
//     const [hourMin, ampm] = time.split(' ');
//     let [hour, minute] = hourMin.split(':').map(Number);
//     if (ampm === 'PM' && hour < 12) hour += 12;
//     if (ampm === 'AM' && hour === 12) hour = 0;
//     return { hour, minute, ampm };
//   };

//   const formatTime = (time) => {
//     let { hour, minute, ampm } = time;
//     let formattedHour = hour % 12 || 12;  // Convert 0 to 12 for AM times
//     if (minute < 10) minute = `0${minute}`;
//     return `${formattedHour}:${minute} ${ampm}`;
//   };

//   const handleSave = () => {
//     const newTask = {
//       id: editTask ? editTask.id : Date.now(),
//       name: taskName,
//       days: selectedDays.map(day => day.value),
//       startTime: formatTime(startTime),
//       endTime: formatTime(endTime),
//     };
//     if (editTask) {
//       updateTask(newTask);
//     } else {
//       addTask(newTask);
//     }
//   };

//   return (
//     <div className="task-manager">
//       <h1>Task Management</h1>
//       <button onClick={() => setFormOpen(true)}>Add Task</button>

//       {isFormOpen && (
//         <div className="task-form">
//           <h3>{editTask ? 'Edit Task' : 'Create Task'}</h3>
//           <label>Task Name:</label>
//           <input
//             type="text"
//             value={taskName}
//             onChange={(e) => setTaskName(e.target.value)}
//             placeholder="Enter task name"
//           />

//           <label>Repeat on Days:</label>
//           <Select
//             isMulti
//             name="days"
//             options={dayOptions}
//             value={selectedDays}
//             onChange={setSelectedDays}
//             placeholder="Select days"
//           />

//           <label>Start Time:</label>
//           <div className="time-picker">
//             <select
//               value={startTime.hour}
//               onChange={(e) => setStartTime({ ...startTime, hour: parseInt(e.target.value) })}
//             >
//               {[...Array(12).keys()].map(i => (
//                 <option key={i} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <span>:</span>
//             <select
//               value={startTime.minute}
//               onChange={(e) => setStartTime({ ...startTime, minute: parseInt(e.target.value) })}
//             >
//               {[...Array(60).keys()].map(i => (
//                 <option key={i} value={i}>
//                   {i < 10 ? `0${i}` : i}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={startTime.ampm}
//               onChange={(e) => setStartTime({ ...startTime, ampm: e.target.value })}
//             >
//               <option value="AM">AM</option>
//               <option value="PM">PM</option>
//             </select>
//           </div>

//           <label>End Time:</label>
//           <div className="time-picker">
//             <select
//               value={endTime.hour}
//               onChange={(e) => setEndTime({ ...endTime, hour: parseInt(e.target.value) })}
//             >
//               {[...Array(12).keys()].map(i => (
//                 <option key={i} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <span>:</span>
//             <select
//               value={endTime.minute}
//               onChange={(e) => setEndTime({ ...endTime, minute: parseInt(e.target.value) })}
//             >
//               {[...Array(60).keys()].map(i => (
//                 <option key={i} value={i}>
//                   {i < 10 ? `0${i}` : i}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={endTime.ampm}
//               onChange={(e) => setEndTime({ ...endTime, ampm: e.target.value })}
//             >
//               <option value="AM">AM</option>
//               <option value="PM">PM</option>
//             </select>
//           </div>

//           <div className="form-actions">
//             <button onClick={handleSave}>Save</button>
//             <button onClick={() => setFormOpen(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       <div className="task-list">
//         {/* <h3>Task List</h3> */}
//         {tasks.length === 0 ? (
//           <p>No tasks available</p>
//         ) : (
//           <ul>
//             {tasks.map((task) => (
//               <li key={task.id}>
//                 <div className="task-item">
//                   <span>{task.name} ({task.days.join(', ')})</span>
//                   <span>Start: {task.startTime || 'Not set'}</span>
//                   <span>End: {task.endTime || 'Not set'}</span>
//                   <div className="task-actions">
//                     <FaEdit onClick={() => openEditForm(task)} />
//                     <FaTrashAlt onClick={() => deleteTask(task.id)} />
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TaskManager;































import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt, FaClipboardList } from 'react-icons/fa';  // Import the task icon
import Select from 'react-select';
import './TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setFormOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [taskName, setTaskName] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState({ hour: 10, minute: 0, ampm: 'AM' });
  const [endTime, setEndTime] = useState({ hour: 11, minute: 0, ampm: 'AM' });

  const dayOptions = [
    { value: 'Sunday', label: 'Sunday' },
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' },
  ];

  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    let ampm = 'AM';

    if (hours >= 12) {
      ampm = 'PM';
      if (hours > 12) hours -= 12;
    }
    if (hours === 0) hours = 12;
    return { hour: hours, minute: minutes, ampm };
  };

  useEffect(() => {
    const currentTime = getCurrentTime();
    setStartTime(currentTime);
    setEndTime(currentTime); 
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setFormOpen(false);
    setTaskName('');
    setSelectedDays([]);
    setStartTime(getCurrentTime());
    setEndTime(getCurrentTime());
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const openEditForm = (task) => {
    setEditTask(task);
    setFormOpen(true);
    setTaskName(task.name);
    setSelectedDays(task.days.map(day => ({ value: day, label: day })));
    setStartTime(parseTime(task.startTime));
    setEndTime(parseTime(task.endTime));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setFormOpen(false);
    setEditTask(null);
    setTaskName('');
    setSelectedDays([]);
    setStartTime(getCurrentTime());
    setEndTime(getCurrentTime());
  };

  const parseTime = (time) => {
    const [hourMin, ampm] = time.split(' ');
    let [hour, minute] = hourMin.split(':').map(Number);
    if (ampm === 'PM' && hour < 12) hour += 12;
    if (ampm === 'AM' && hour === 12) hour = 0;
    return { hour, minute, ampm };
  };

  const formatTime = (time) => {
    let { hour, minute, ampm } = time;
    let formattedHour = hour % 12 || 12;
    if (minute < 10) minute = `0${minute}`;
    return `${formattedHour}:${minute} ${ampm}`;
  };

  const handleSave = () => {
    const newTask = {
      id: editTask ? editTask.id : Date.now(),
      name: taskName,
      days: selectedDays.map(day => day.value),
      startTime: formatTime(startTime),
      endTime: formatTime(endTime),
    };
    if (editTask) {
      updateTask(newTask);
    } else {
      addTask(newTask);
    }
  };

  return (
    <div className="task-manager">
      <h1>Task Management</h1>
      <button onClick={() => setFormOpen(true)}>Add Task</button>
    
      {isFormOpen && (
        <div className="task-form">
          <h3>{editTask ? 'Edit Task' : 'Create Task'}</h3>
          <label>Task Name:</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter task name"
          />

          <label>Repeat on Days:</label>
          <Select
            isMulti
            name="days"
            options={dayOptions}
            value={selectedDays}
            onChange={setSelectedDays}
            placeholder="Select days"
          />

          <label>Start Time:</label>
          <div className="time-picker">
            <select
              value={startTime.hour}
              onChange={(e) => setStartTime({ ...startTime, hour: parseInt(e.target.value) })}
            >
              {[...Array(12).keys()].map(i => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <span>:</span>
            <select
              value={startTime.minute}
              onChange={(e) => setStartTime({ ...startTime, minute: parseInt(e.target.value) })}
            >
              {[...Array(60).keys()].map(i => (
                <option key={i} value={i}>{i < 10 ? `0${i}` : i}</option>
              ))}
            </select>
            <select
              value={startTime.ampm}
              onChange={(e) => setStartTime({ ...startTime, ampm: e.target.value })}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          <label>End Time:</label>
          <div className="time-picker">
            <select
              value={endTime.hour}
              onChange={(e) => setEndTime({ ...endTime, hour: parseInt(e.target.value) })}
            >
              {[...Array(12).keys()].map(i => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <span>:</span>
            <select
              value={endTime.minute}
              onChange={(e) => setEndTime({ ...endTime, minute: parseInt(e.target.value) })}
            >
              {[...Array(60).keys()].map(i => (
                <option key={i} value={i}>{i < 10 ? `0${i}` : i}</option>
              ))}
            </select>
            <select
              value={endTime.ampm}
              onChange={(e) => setEndTime({ ...endTime, ampm: e.target.value })}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          <div className="form-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setFormOpen(false)}>Cancel</button>
          </div>
        </div>
      )}

<div className="task-list">
  {tasks.length === 0 ? (
    <p>No tasks available</p>
  ) : (
    <ul>
      {tasks.map((task, index) => (
        <li key={task.id}>
          <div className="task-item">
            <div>
                {/* Display the task count (index + 1) */}
                <span className="task-count">{index + 1}.</span> 
                {/* <FaClipboardList style={{ marginRight: '10px', color: '#f47b12' }} /> */}
            <span className="task-name">{task.name} ({task.days.join(', ')})</span>
            </div>
            {/* Display the task count (index + 1) */}
            {/* <span className="task-count">{index + 1}.</span>  */}
            {/* <FaClipboardList style={{ marginRight: '10px', color: '#f47b12' }} /> */}
            {/* <span className="task-name">{task.name} ({task.days.join(', ')})</span> */}
            <div>
               <span>Start: {task.startTime || 'Not set'}</span>
            </div>
            <div>
              <span>End: {task.endTime || 'Not set'}</span>
            </div>
            
            {/* <span>Start: {task.startTime || 'Not set'}</span> */}
            {/* <span>End: {task.endTime || 'Not set'}</span> */}

            <div className="task-actions">
              <FaEdit onClick={() => openEditForm(task)} />
              <FaTrashAlt onClick={() => deleteTask(task.id)} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  )}
</div>
    </div>
  );
};


export default TaskManager;












// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';  
// import Select from 'react-select';
// import './TaskManager.css';

// const TaskManager = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isFormOpen, setFormOpen] = useState(false);
//   const [editTask, setEditTask] = useState(null);
//   const [taskName, setTaskName] = useState('');
//   const [selectedDays, setSelectedDays] = useState([]);
//   const [startTime, setStartTime] = useState({ hour: 10, minute: 0, ampm: 'AM' });
//   const [endTime, setEndTime] = useState({ hour: 11, minute: 0, ampm: 'AM' });

//   const dayOptions = [
//     { value: 'Sunday', label: 'Sunday' },
//     { value: 'Monday', label: 'Monday' },
//     { value: 'Tuesday', label: 'Tuesday' },
//     { value: 'Wednesday', label: 'Wednesday' },
//     { value: 'Thursday', label: 'Thursday' },
//     { value: 'Friday', label: 'Friday' },
//     { value: 'Saturday', label: 'Saturday' },
//   ];

//   useEffect(() => {
//     const currentTime = getCurrentTime();
//     setStartTime(currentTime);
//     setEndTime(currentTime);
//   }, []);

//   const getCurrentTime = () => {
//     const now = new Date();
//     let hours = now.getHours();
//     const minutes = now.getMinutes();
//     let ampm = 'AM';
//     if (hours >= 12) {
//       ampm = 'PM';
//       if (hours > 12) hours -= 12;
//     }
//     if (hours === 0) hours = 12;
//     return { hour: hours, minute: minutes, ampm };
//   };

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//     setFormOpen(false);
//     setTaskName('');
//     setSelectedDays([]);
//     setStartTime(getCurrentTime());
//     setEndTime(getCurrentTime());
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   const openEditForm = (task) => {
//     setEditTask(task);
//     setFormOpen(true);
//     setTaskName(task.name);
//     setSelectedDays(task.days.map(day => ({ value: day, label: day })));
//     setStartTime(parseTime(task.startTime));
//     setEndTime(parseTime(task.endTime));
//   };

//   const updateTask = (updatedTask) => {
//     setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
//     setFormOpen(false);
//     setEditTask(null);
//     setTaskName('');
//     setSelectedDays([]);
//     setStartTime(getCurrentTime());
//     setEndTime(getCurrentTime());
//   };

//   const parseTime = (time) => {
//     const [hourMin, ampm] = time.split(' ');
//     let [hour, minute] = hourMin.split(':').map(Number);
//     if (ampm === 'PM' && hour < 12) hour += 12;
//     if (ampm === 'AM' && hour === 12) hour = 0;
//     return { hour, minute, ampm };
//   };

//   const formatTime = (time) => {
//     let { hour, minute, ampm } = time;
//     let formattedHour = hour % 12 || 12;
//     if (minute < 10) minute = `0${minute}`;
//     return `${formattedHour}:${minute} ${ampm}`;
//   };

//   const handleSave = () => {
//     const newTask = {
//       id: editTask ? editTask.id : Date.now(),
//       name: taskName,
//       days: selectedDays.map(day => day.value),
//       startTime: formatTime(startTime),
//       endTime: formatTime(endTime),
//     };
//     if (editTask) {
//       updateTask(newTask);
//     } else {
//       addTask(newTask);
//     }
//   };

//   return (
//     <div className="task-manager">
//       <h1>Task Management</h1>
//       <button onClick={() => setFormOpen(true)}>Add Task</button>

//       {isFormOpen && (
//         <div className="task-form">
//           <h3>{editTask ? 'Edit Task' : 'Create Task'}</h3>
//           <label>Task Name:</label>
//           <input
//             type="text"
//             value={taskName}
//             onChange={(e) => setTaskName(e.target.value)}
//             placeholder="Enter task name"
//           />
//           <label>Repeat on Days:</label>
//           <Select
//             isMulti
//             name="days"
//             options={dayOptions}
//             value={selectedDays}
//             onChange={setSelectedDays}
//             placeholder="Select days"
//           />
//           <label>Start Time:</label>
//           <div className="time-picker">
//             <select
//               value={startTime.hour}
//               onChange={(e) => setStartTime({ ...startTime, hour: parseInt(e.target.value) })}
//             >
//               {[...Array(12).keys()].map(i => (
//                 <option key={i} value={i + 1}>{i + 1}</option>
//               ))}
//             </select>
//             <span>:</span>
//             <select
//               value={startTime.minute}
//               onChange={(e) => setStartTime({ ...startTime, minute: parseInt(e.target.value) })}
//             >
//               {[0, 15, 30, 45].map(i => (
//                 <option key={i} value={i}>{i < 10 ? `0${i}` : i}</option>
//               ))}
//             </select>
//             <select
//               value={startTime.ampm}
//               onChange={(e) => setStartTime({ ...startTime, ampm: e.target.value })}
//             >
//               <option value="AM">AM</option>
//               <option value="PM">PM</option>
//             </select>
//           </div>

//           <label>End Time:</label>
//           <div className="time-picker">
//             <select
//               value={endTime.hour}
//               onChange={(e) => setEndTime({ ...endTime, hour: parseInt(e.target.value) })}
//             >
//               {[...Array(12).keys()].map(i => (
//                 <option key={i} value={i + 1}>{i + 1}</option>
//               ))}
//             </select>
//             <span>:</span>
//             <select
//               value={endTime.minute}
//               onChange={(e) => setEndTime({ ...endTime, minute: parseInt(e.target.value) })}
//             >
//               {[0, 15, 30, 45].map(i => (
//                 <option key={i} value={i}>{i < 10 ? `0${i}` : i}</option>
//               ))}
//             </select>
//             <select
//               value={endTime.ampm}
//               onChange={(e) => setEndTime({ ...endTime, ampm: e.target.value })}
//             >
//               <option value="AM">AM</option>
//               <option value="PM">PM</option>
//             </select>
//           </div>

//           <button onClick={handleSave}>Save Task</button>
//         </div>
//       )}

//       <div className="task-list">
//         <ul>
//           {tasks.length === 0 ? (
//             <p>No tasks available</p>
//           ) : (
//             tasks.map((task) => (
//               <li key={task.id} className="task-item">
//                 <div className="task-name">{task.name}</div>
//                 <div className="task-actions">
//                   <FaEdit onClick={() => openEditForm(task)} />
//                   <FaTrashAlt onClick={() => deleteTask(task.id)} />
//                 </div>
//               </li>
//             ))
//           )}
//         </ul>
//       </div>

//       <Link to="/dailyschedule/DailySchedule" state={{ tasks }}>Go to Daily Schedule</Link>
//     </div>
//   );
// };

// export default TaskManager;


