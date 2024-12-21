import { useState } from 'react';
import FormUsers from '../../components/Forms/FormUsers'
import Message from '../../components/Message';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { validaSenha } from '../../utils/utils';

function Add() {
    const [message, setMessage] = useState();
    const [data, setData] = useState();
    const [validaPass, setvalidaPass] = useState([false,false,false]);
    const apiUrl = process.env.REACT_APP_API_URL;

    const navigate = useNavigate()

    const handleOnChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})

        if (data && data.password){
            const valida = validaSenha(data.password);
            setvalidaPass(valida);
        }
        //validaSenha(e.password.value);
    }

    const handleOnSubmit= (e) =>{
        e.preventDefault();

        axios.post(apiUrl+`/user/add`, data)
        .then((result)=>{
                setMessage({type: result.data.type, msg: result.data.msg})
                if (result.data.type==='success'){
                    navigate('/dashboard/user/list')
                }
            }
            
        )
        .catch(e=>console.log(e))
    }

    return ( 

        <>
            {message && <Message type={message.type} msg={message.msg} />}
            <FormUsers title={`New User`} handleOnChange={handleOnChange}  handleOnSubmit={handleOnSubmit} data={data} state={setData} validaPass={validaPass && validaPass} />
        </>
     );
}

export default Add;