import React, { useState } from "react";
import "./styles/AddTask.css";


const AddTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Title is required.");
      return;
    }
    const newTask = {
      title,
      description,
      dueDate,
      priority,
    };
    console.log("New Task:", newTask);
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("low");
  };

  return (
    <div className="add-task">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>

        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
