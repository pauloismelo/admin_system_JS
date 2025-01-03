import { useEffect, useState } from "react";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";
import FormUsers from "../../components/Forms/FormUsers";

import { validaSenha } from '../../utils/utils';
import { ToastContainer, toast } from "react-toastify";


function Edit() {
    const [data, setData] = useState([]);
    const [validaPass, setvalidaPass] = useState([false,false,false]);

    const apiUrl = process.env.REACT_APP_API_URL;

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(apiUrl+`/user/${id}`)
        .then((result)=>{
            setData(result.data[0]);
            
            console.log(data)
            if (data && data.password){
                const valida = validaSenha(data.password);
                setvalidaPass(valida);
            }
        })
        .catch(e=>console.log(e))
    },[])

    useEffect(()=>{
        const valida = validaSenha(data.password);
        setvalidaPass(valida);
    },[data.password])

    const handleOnChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value});
    }

   

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        axios.put(apiUrl+`/user/`, data)
        .then((result)=>{
            
            if(result.data.type==='success'){
                toast.success(result.data.msg, {
                    theme: process.env.TOAST_THEME,
                    autoClose: process.env.TOAST_AUTOCLOSE,
                    onClose: ()=> navigate('/dashboard/user/list'), 
                });   
            }

        })
        .catch(e=>console.log())

    }
    return ( 
    <>
        <ToastContainer/>
        <FormUsers title={`Edit User`} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}  data={data} state={setData} validaPass={validaPass && validaPass}/>
    </> );
}

export default Edit;