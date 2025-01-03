import { useState } from "react";
import FormArticles from "../../components/Forms/FormArticles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


function Add() {
    const [data, setData] = useState();

    const [buttonAI, setbuttonAI] = useState();
    const navigate = useNavigate();

    const apiUrl = process.env.REACT_APP_API_URL;

    const handleOnChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
        if (data !== undefined){
            if (data.title){
                setbuttonAI('ok')
            }else{
                setbuttonAI()
            }
        }
    }

    const handleOnChange2 = (value) => {
        setData({...data, 'text':value})
    }
    
    const handleAI =  async () => {
        try{
            const title = data.title;
            setbuttonAI('loading')
            const response = await axios.post(apiUrl+`/helpAI/help`, {title});
            setData({...data, text: response.data.msg})
            setbuttonAI('ok')
        }catch (error){
            console.log(error)
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('authToken'); //user token
        const result = await axios.post(apiUrl+`/articles/add`, data, {
            headers: {
                'Content-Type': 'application/json',  // Definindo que estamos enviando JSON
                'Authorization': `Bearer ${token}`,  // Enviando o token no header Authorization
              }
            });
        
        try{
            toast.success(result.data.msg, {
                theme: process.env.TOAST_THEME,
                autoClose: process.env.TOAST_AUTOCLOSE,
                onClose: () => navigate('/dashboard/article/list'),
            });
        }catch(e){
            console.log(e)
        }
    }

    const options = ['ATIVO', 'INATIVO'];

    return ( 
        <>
        <ToastContainer/>
        <FormArticles title={`New Article`} handleOnChange={handleOnChange} handleOnChange2={handleOnChange2} handleOnSubmit={handleOnSubmit} options={options} data={data} state={setData} handleAI={handleAI} buttonAI={buttonAI}/>
        </>
     );
}

export default Add;