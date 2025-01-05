import axios from 'axios';
import Botton from '../components/Botton';
import Input from '../components/Input';

import {Link, useNavigate} from 'react-router-dom';

import { useState } from 'react';
import Message from '../components/Message';

function Register() {
    
    const apiUrl = process.env.REACT_APP_API_URL;
    const [data, setData] = useState();
    const [message, setMessage] = useState();

    const navigate = useNavigate();

    const handleOnChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value});
        console.log(data);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(apiUrl+`/register`,data)
        .then((result)=>{ 
            setMessage(result.data);
            
            setTimeout(()=>{
                setMessage();
                if (result.data.type==='success'){
                    navigate('/login');
                }
            },5000);
            console.log(result.data)
            
        })
        .catch(e => console.log(e))

    }
    console.log('Msg: ',message)
    return ( 
        <div className='h-screen flex flex-col'>
            <div className='flex-1 bg-slate-800'></div>
            <main className='flex-auto text-center align-middle'>
            <div className="mt-10 mb-10 ml-80 mr-80 border-2 p-10">
                <form onSubmit={handleSubmit}>
                    {message ? <Message type={message.type} msg={message.msg}/> : ''}
                    <h1 className='text-slate-800'>New User</h1>
                    <Input type="text" name="name" title="Login" handleOnChange={handleOnChange}/>
                    <Input type="password" name="password" title="Password" handleOnChange={handleOnChange}/>
                    <Botton type="submit" type2="success" value="REGISTER"/>
                </form>
                <div className='m-10 p-10 text-gray-400'>Do you have a account? <Link className='text-blue-950' to="/login">Sign In</Link> </div>
            </div>
        </main>
        <div className='flex-1 bg-slate-800'></div>
        </div>
     );
}

export default Register;