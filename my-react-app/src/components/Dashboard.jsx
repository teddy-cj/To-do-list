import React, { useState, useEffect } from "react";
import "../App.css";

const TodoList = () => {
  // Load tasks from localStorage (or set an empty array)
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState("");

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="dashboard-main">
    <div className="todo-container">
      <div className="input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Task to be done..."
          onKeyPress={(e) => e.key === "Enter" && addTask()} // Press Enter to add task
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task ${task.completed ? "completed" : ""}`}
            onClick={() => toggleComplete(task.id)}
          >
            {task.text}
            <button
              className="delete"
              onClick={(e) => {
                e.stopPropagation(); // Prevents toggling complete
                deleteTask(task.id);
              }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
    </main>
  );
};

export default TodoList;