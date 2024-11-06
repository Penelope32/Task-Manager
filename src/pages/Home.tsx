import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to Your Task Manager</h1>
      <p>Organize, track, and manage your tasks efficiently.</p>
      
      <div className="task-overview">
        <div className="task-summary">
          <h3>Tasks Summary</h3>
          <ul>
            <li>Total Tasks: 12</li>
            <li>Completed Tasks: 5</li>
            <li>Pending Tasks: 7</li>
          </ul>
        </div>
        
        <div className="quick-links">
          <h3>Quick Links</h3>
          <Link to="/AddTask" className="btn">Add New Task</Link>
          <Link to="/Tasks" className="btn">View All Tasks</Link>
          <Link to="/CompletedTask" className="btn">View Completed Tasks</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
