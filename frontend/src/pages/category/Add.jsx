import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import FormCategories from "../../components/Forms/FormCategories";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

function CategoryAdd() {
    const [data, setData] = useState();
    const apiUrl = process.env.REACT_APP_API_URL;

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.post(apiUrl+`/category/add`, data)
        .then((result) =>{
            
            toast.success(result.data.msg, {
                theme: process.env.TOAST_THEME,
                autoClose: process.env.TOAST_AUTOCLOSE,
                onClose: () => navigate('/dashboard/category/list'),
            });
        })
        .catch(e=>console.log(e))
    }

    const options = ['ATIVO','INATIVO'];


    return ( 
    <>
        <ToastContainer/>
        <FormCategories title={`New Category`} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} options={options} data={data}/>
    </> );
}

export default CategoryAdd;