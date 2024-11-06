import React from "react";
import { Link } from "react-router-dom";
import "./styles/Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      
      
      <div className="task-summary">
        <div className="summary-item">
          <h3>Total Tasks</h3>
          <p>12</p>
        </div>
        <div className="summary-item">
          <h3>Pending Tasks</h3>
          <p>7</p>
        </div>
        <div className="summary-item">
          <h3>Completed Tasks</h3>
          <p>5</p>
        </div>
        <div className="summary-item">
          <h3>Overdue Tasks</h3>
          <p>2</p>
        </div>
      </div>
      
      <div className="task-preview">
        <h3>Upcoming Tasks</h3>
        <ul>
          <li>
            <p>Task 1 - Due: 2024-10-29 - Priority: High</p>
          </li>
          <li>
            <p>Task 2 - Due: 2024-11-02 - Priority: Medium</p>
          </li>
        </ul>
        <Link to="/Tasks" className="btn">View All Tasks</Link>
      </div>
      
      
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <Link to="/AddTask" className="btn">Add New Task</Link>
        <Link to="/CompletedTask" className="btn">View Completed Tasks</Link>
      </div>
    </div>
  );
};

export default Dashboard;
