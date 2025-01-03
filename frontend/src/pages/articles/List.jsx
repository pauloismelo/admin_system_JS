
import { Suspense, useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

function List() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [data, setData] = useState([]);


    useEffect(()=>{
        setTimeout(()=>{
            axios.get(apiUrl+'/articles/list')
            .then((result)=>{
                setData(result.data.result);
                }
            )
            .catch((e)=>console.log(e))
        },3000)
        
    },[])

    const DeleteReg = (id)=>{
        axios.delete(apiUrl+`/articles/${id}`)
        .then((result)=>{
            toast.success(result.data.msg, {
                theme: process.env.TOAST_THEME,
                autoClose: process.env.TOAST_AUTOCLOSE,
                onClose: ()=> setData(data.filter((value)=>(value.id!==id)))
                
            });

        })
        .catch(e=>console.log(e))
    }

   
    return ( 
    
    <>
    <ToastContainer/>
    <table className="w-full">
        <thead>
            <tr>
                <th className="text-left">Title</th>
                <th className="text-center">Status</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
            </tr>
        </thead>
        
        <tbody>
            
            
                {data ?
                ( data.map((value)=>(
                    <tr key={value.id}>
                        <td className="text-left">{value.title}</td>
                        <td className="text-center">{value.status}</td>
                        <td>
                            <Link to={`/dashboard/article/edit/${value.id}`} className="inline-flex items-center justify-center w-full h-full cursor-pointer">
                                <FaEdit className="text-green-600"></FaEdit>
                            </Link>
                        </td>
                        <td className="inline-flex items-center justify-center w-full h-full">
                            <FaTrash className="cursor-pointer text-red-600" onClick={()=> {DeleteReg(value.id)}}></FaTrash>
                        </td>
                    </tr>
                ))
                    
                )
                :
                (
                    <tr>
                        <td colSpan="4" className="text-center text-red-800">Categories not found</td>
                    </tr>
                )
                }
            
            
        </tbody>
       
    </table>
    </>
    );
}

export default List;