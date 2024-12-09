import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


function Sidebar() {
    const {logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <div className="w-48 bg-slate-800 text-white p-2 fixed h-lvh">
            <h2 className="font-bold mb-8">Menu</h2>
            <ul>
                <li className="mb-2"><NavLink to="/dashboard">Home</NavLink></li>
                <li className="mb-2"><NavLink to="">Users</NavLink></li>
                <li className="mb-2"><NavLink to="/dashboard/category">Categories</NavLink></li>
                <li className="mb-2"><NavLink to="">Articles</NavLink></li>
                <li className="mt-8 text-red-800"><NavLink onClick={handleLogout} className="logout">Logout</NavLink></li>
                
            </ul>
            
        </div>
     );
}

export default Sidebar;