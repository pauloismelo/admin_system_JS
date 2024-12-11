import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import FormCategories from "../../components/FormCategories";
import Message from '../../components/Message';
import axios from 'axios';

function CategoryAdd() {
    const [data, setData] = useState();
    const [message, setMessage] = useState();
    const apiUrl = process.env.REACT_APP_API_URL;

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.post(apiUrl+`/category/add`, data)
        .then((result) =>{
            console.log(result)
            setMessage({
                type:result.data.type,
                msg:result.data.msg
            })

            setTimeout(()=>{
                setMessage();
                navigate('/dashboard/category/list');
            },2000)
            


        })
        .catch(e=>console.log(e))
    }

    const options = ['ATIVO','INATIVO'];


    return ( 
    <>
        {message ? (<Message type={message.type} msg={message.msg}/>) : ''}
        <FormCategories title={`New Category`} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} options={options} data={data}/>
    </> );
}

export default CategoryAdd;