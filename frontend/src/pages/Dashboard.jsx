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
        <header className="h-10 w-full bg-slate-800 text-white fixed justify-items-end">
            <ul className="grid grid-cols-2 text-right">
                <li className="mr-3 mt-2 mb-2">
                    <NavLink to="/dashboard/home">Home</NavLink>
                </li>
                <li className="mr-3 mt-2 mb-2">
                    <NavLink onClick={handleLogout}>Logout</NavLink>
                </li>
            </ul>
            
        </header>
        <Sidebar/>
        <main className="grow pl-52 pt-12 bg-gray-200 h-screen">
            <Outlet/>
            
        </main>
        <footer></footer>
        </>
     );
}

export default Dashboard;