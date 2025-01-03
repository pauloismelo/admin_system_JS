import { useEffect, useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import FormArticles from "../../components/Forms/FormArticles";


function Edit() {
    const [data, setData] = useState([]);
    const [buttonAI, setbuttonAI] = useState();

    const apiUrl = process.env.REACT_APP_API_URL;

    const {id} = useParams();
    const options = ['ATIVO','INATIVO'];
    const navigate = useNavigate();



    useEffect(()=>{
        axios.get(apiUrl+`/articles/${id}`)
        .then((result)=>{
            setData(result.data[0]);
        })
        .catch(e=>console.log(e))
    },[])

    const handleOnChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value});
        if (data !== undefined || data.title!==''){
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

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        axios.put(apiUrl+`/articles/`, data)
        .then((result)=>{
            
            if(result.data.type==='success'){
                toast.success(result.data.msg, {
                    theme: process.env.TOAST_THEME,
                    autoClose: process.env.TOAST_AUTOCLOSE,
                    onClose: () => navigate('/dashboard/article/list'),
                });
            }

        })
        .catch(e=>console.log())

    }
    return ( 
    <>
       <ToastContainer/>
        <FormArticles title={`Edit Article`} handleOnChange={handleOnChange} handleOnChange2={handleOnChange2} handleOnSubmit={handleOnSubmit} options={options} data={data} state={setData} handleAI={handleAI} buttonAI={buttonAI} />
    </> );
}

export default Edit;