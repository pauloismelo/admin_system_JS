import { useEffect, useState } from 'react';
import FormUsers from '../../components/Forms/FormUsers'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { validaSenha } from '../../utils/utils';

import {ToastContainer, toast} from 'react-toastify';

function Add() {
    const [data, setData] = useState([]);
    const [validaPass, setvalidaPass] = useState([false,false,false]);
    const apiUrl = process.env.REACT_APP_API_URL;

    const navigate = useNavigate()

    useEffect(()=>{
        setvalidaPass(validaSenha());
       //console.log(validaSenha(data.password))
    },[])

    useEffect(()=>{
        setvalidaPass(validaSenha(data.password));
    },[data.password])


    const handleOnChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleOnSubmit= (e) =>{
        e.preventDefault();

        axios.post(apiUrl+`/user/add`, data)
        .then((result)=>{
            toast.success(result.data.msg, {
                theme: process.env.TOAST_THEME,
                autoClose: process.env.TOAST_AUTOCLOSE,
                onClose: () => navigate('/dashboard/user/list'),
            });
        }
)
        .catch(e=>console.log(e))
    }
        

    return ( 

        <>
            <ToastContainer/>
            <FormUsers title={`New User`} handleOnChange={handleOnChange}  handleOnSubmit={handleOnSubmit} data={data} state={setData} validaPass={validaPass && validaPass} />
        </>
     );
}

export default Add;