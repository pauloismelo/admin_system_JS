import { Link, Outlet } from "react-router-dom";
import { FaPlus, FaSearch } from "react-icons/fa";

function User() {
    return ( 
    <div className="rounded bg-white m-3 p-3">
        <div className="h-10 flex justify-between">
            <div className="text-2xl font-bold">
                Users
            </div>
            
            <ul className="flex justify-evenly">
                <li className="ml-4 flex align-middle">
                    <FaPlus className="mr-1"></FaPlus><Link to="/dashboard/user/add">New</Link>
                </li>
                <li className="ml-4 flex align-middle">
                    <FaSearch className="mr-1"></FaSearch><Link to="/dashboard/user/list">Consult</Link>
                    
                </li>
            </ul>
        </div>
        <hr></hr>
        <div>
            <Outlet/>
        </div>
    </div> );
}

export default User;