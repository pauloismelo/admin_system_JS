import { useEffect, useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import FormCategories from "../../components/Forms/FormCategories";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
    const [data, setData] = useState([]);

    const apiUrl = process.env.REACT_APP_API_URL;
    const {id} = useParams();
    const options = ['ATIVO','INATIVO'];
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(apiUrl+`/category/${id}`)
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

        axios.put(apiUrl+`/category/${id}`, data)
        .then((result)=>{
            if(result.data.type==='success'){
                toast.success(result.data.msg, {
                    theme: process.env.TOAST_THEME,
                    autoClose: process.env.TOAST_AUTOCLOSE,
                    onClose: () => navigate('/dashboard/category/list'),
                });
            }

        })
        .catch(e=>console.log())

    }


    return ( 
    <>
        <ToastContainer/>
        <FormCategories title={`Edit Category`} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} options={options} data={data}/>
    </> );
}

export default Edit;