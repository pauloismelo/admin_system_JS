
import { Link, Outlet } from "react-router-dom";
import { FaPlus, FaSearch } from "react-icons/fa";



function Article() {

    return ( 
    <>
    <div className="h-10 flex justify-between">
        <div className="text-2xl font-bold">
            Articles
        </div>
        
        <ul className="flex justify-evenly">
            <li className="ml-4 flex align-middle">
                <FaPlus className="mr-1"></FaPlus><Link to="/dashboard/article/add">New</Link>
            </li>
            <li className="ml-4 flex align-middle">
                <FaSearch className="mr-1"></FaSearch><Link to="/dashboard/article/list">Consult</Link>
                
            </li>
        </ul>
    </div>
    <hr></hr>
    <div>
        <Outlet/>
    </div>
    </> 
    );
}

export default Article;