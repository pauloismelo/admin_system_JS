
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import Message from "../../components/Message";

import axios from "axios";
import { Link } from "react-router-dom";

function List() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [data, setData] = useState([]);
    const [message, setMessage] = useState();


    useEffect(()=>{
        axios.get(apiUrl+'/category/list')
        .then((result)=>{
            setData(result.data);
            }
        )
        .catch((e)=>console.log(e))
    },[])

    const DeleteReg = (id)=>{
        axios.delete(apiUrl+`/category/${id}`)
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

    console.log('data: ',data)
    return ( 
        
    <>
    {message ? (<Message type={message.type} msg={message.msg}/>) : ''}
    <table className="w-full">
        <thead>
            <tr>
                <th className="text-left">Name</th>
                <th className="text-center">Status</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
            </tr>
        </thead>
        <tbody>
            {data.length>0 ?
            ( data.map((value)=>(
                <tr key={value.id}>
                    <td className="text-left">{value.name}</td>
                    <td className="text-center">{value.status}</td>
                    <td className="text-center">
                        <Link to={`/dashboard/category/edit/${value.id}`}>
                            <FaEdit></FaEdit>
                        </Link>
                    </td>
                    <td className="text-center">
                        <FaTrash className="cursor-pointer" onClick={()=> {DeleteReg(value.id)}}></FaTrash>
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