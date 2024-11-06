import { Link, Outlet } from "react-router-dom";
import "./styles/navbar.css";



const Layout: React.FC = () => {
    return(
        <div className="layout">
        <nav className="navigation">
            <h2>Task Manager</h2>
            <Link to="/">Home</Link>
            <Link to="/DashBoard">Dashboard</Link>
            <Link to="/AddTask">Add Task</Link>
            <Link to="/CompletedTask">Completed Tasks</Link>
            <Link to="/EditTask">Edit Task</Link>
            <Link to="/Tasks">All Tasks</Link>
        </nav>
        <main className="main-content">
             <Outlet />
        </main>

        {/* <footer >
            <p>Task Manager App © 2024</p>
        </footer> */}
        </div>
    );
}


export default Layout;