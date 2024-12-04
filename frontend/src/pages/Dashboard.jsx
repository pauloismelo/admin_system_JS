import { NavLink, Outlet } from "react-router-dom";
import styles from '../assets/css/Dashboard.modules.css'

import { useContext } from "react";
import { AuthContext } from '../Context/AuthContext';
import Sidebar from "./Sidebar";


function Dashboard() {
    const {logout} = useContext(AuthContext)

    const handleLogout = () =>{
        logout();
    }

    return ( 
        <>
        <header>
            <ul>
                <li>
                    <NavLink to="/dashboard">Home</NavLink>
                </li>
                <li>
                    <NavLink onClick={handleLogout}>Logout</NavLink>
                </li>
            </ul>
            
            
            
        </header>
        <Sidebar/>
        <main>
            <Outlet/>
        </main>
        <footer></footer>
        </>
     );
}

export default Dashboard;