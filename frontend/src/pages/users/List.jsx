
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import Message from "../../components/Message";

import axios from "axios";
import { Link } from "react-router-dom";

import {americanDate} from '../../utils/utils'

function List() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [data, setData] = useState([]);
    const [message, setMessage] = useState();


    useEffect(()=>{
        axios.get(apiUrl+'/user/list')
        .then((result)=>{
            setData(result.data);
            }
        )
        .catch((e)=>console.log(e))
    },[])

    const DeleteReg = (id)=>{
        axios.delete(apiUrl+`/user/${id}`)
        .then((result)=>{
            setMessage({
                type:result.data.type,
                msg:result.data.msg
            })

            setTimeout(()=>{
                setMessage();
                setData(data.filter((value)=>(value.id!==id)))
            },2000)
        })
        .catch(e=>console.log(e))
    }

   
    return ( 
    <>
    {message ? (<Message type={message.type} msg={message.msg}/>) : ''}
    <table className="w-full">
        <thead>
            <tr>
                <th className="text-left">Name</th>
                <th className="text-center">Register</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
            </tr>
        </thead>
        <tbody>
            {data ?
            ( data.map((value)=>(
                <tr key={value.id}>
                    <td className="text-left">{value.name}</td>
                    <td className="text-center">{americanDate(value.datereg)}</td>
                    <td>
                        <Link to={`/dashboard/user/edit/${value.id}`} className="inline-flex items-center justify-center w-full h-full cursor-pointer">
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
                    <td colSpan="4" className="text-center text-red-800">Users not found</td>
                </tr>
            )
            }
            
        </tbody>
    </table>

    </> 
    );
}

export default List;