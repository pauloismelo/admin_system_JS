import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


const PrivateRoute = ({children}) =>{
    const navigate = useNavigate();
    const {isAuthenticated} = useContext(AuthContext);
    return isAuthenticated ? children : navigate('/login');

}

export default PrivateRoute;