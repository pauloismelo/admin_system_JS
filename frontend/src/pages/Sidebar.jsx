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
                <li className="mb-2"><NavLink to="/dashboard/home">Home</NavLink></li>
                <li className="mb-2"><NavLink to="/dashboard/user/list">Users</NavLink></li>
                <li className="mb-2"><NavLink to="/dashboard/category/list">Categories</NavLink></li>
                <li className="mb-2"><NavLink to="/dashboard/article/list">Articles</NavLink></li>
                <li className="mt-8 text-red-800"><NavLink onClick={handleLogout} className="logout">Logout</NavLink></li>
                
            </ul>
            
        </div>
     );
}

export default Sidebar;