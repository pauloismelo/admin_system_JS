import { useEffect, useState } from "react";
import axios from "axios";

import Message from "../../components/Message";
import { useParams, useNavigate } from "react-router-dom";
import FormUsers from "../../components/Forms/FormUsers";


function Edit() {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState();

    const apiUrl = process.env.REACT_APP_API_URL;

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(apiUrl+`/user/${id}`)
        .then((result)=>{
            setData(result.data[0]);
        })
        .catch(e=>console.log(e))
    },[])

    const handleOnChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value});
    }

   

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        axios.put(apiUrl+`/user/`, data)
        .then((result)=>{
            
            if(result.data.type==='success'){
                setMessage({
                    type:result.data.type,
                    msg: result.data.msg
                });
                
            }
            setTimeout(()=>{
                setMessage();
                navigate('/dashboard/user/list');
            },2000)

        })
        .catch(e=>console.log())

    }
    return ( 
    <>
        {message ? (<Message type={message.type} msg={message.msg}/>) : ''}
        
        <FormUsers title={`Edit User`} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}  data={data} state={setData} />
    </> );
}

export default Edit;