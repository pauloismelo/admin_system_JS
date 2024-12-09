
import { Link, Outlet } from "react-router-dom";


function Category() {
    return ( 
    <>
    <div className="h-10 flex justify-between">
        Categories
        <ul className="flex text-right justify-start">
            <li className="ml-4">
                <Link to="/dashboard/category/add">New</Link>
            </li>
            <li className="ml-4">
                <Link to="/dashboard/category">Consult</Link>
                
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

export default Category;