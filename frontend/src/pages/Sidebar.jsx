import { NavLink } from "react-router-dom";
import '../assets/css/Sidebar.modules.css'
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


function Sidebar() {
    const {logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li><NavLink to="/dashboard">Home</NavLink></li>
                <li><NavLink to="">Users</NavLink></li>
                <li><NavLink to="/dashboard/categoryadd">Categories</NavLink></li>
                <li><NavLink to="">Articles</NavLink></li>
                <li className="logout"><NavLink onClick={handleLogout} className="logout">Logout</NavLink></li>
                
            </ul>
            
        </div>
     );
}

export default Sidebar;