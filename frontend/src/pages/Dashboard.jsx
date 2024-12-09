import { NavLink, Outlet } from "react-router-dom";

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
        <header className="h-10 bg-slate-800 text-white justify-items-end">
            <ul className="grid grid-cols-2 text-right">
                <li className="mr-3 mt-2 mb-2">
                    <NavLink to="/dashboard">Home</NavLink>
                </li>
                <li className="mr-3 mt-2 mb-2">
                    <NavLink onClick={handleLogout}>Logout</NavLink>
                </li>
            </ul>
            
            
            
        </header>
        <Sidebar/>
        <main className="ml-56 grow">
            <Outlet/>
        </main>
        <footer></footer>
        </>
     );
}

export default Dashboard;