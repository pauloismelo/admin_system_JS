import axios from 'axios';
import Botton from '../components/Botton';
import Input from '../components/Input';

import {useNavigate} from 'react-router-dom';




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
        <div className='max-h-full'>
            <div className='h-20 bg-slate-800'></div>
            <main className='text-center align-middle h-80'>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    {message ? <Message type={message.type} msg={message.msg}/> : ''}
                    <h1 className='text-slate-800'>New User</h1>
                    <Input type="text" name="name" title="Login" handleOnChange={handleOnChange}/>
                    <Input type="password" name="password" title="Password" handleOnChange={handleOnChange}/>
                    <Botton type="submit" type2="danger" value="REGISTER"/>
                </form>
            </div>
        </main>
        <div className='h-20 bg-slate-800'></div>
        </div>
     );
}

export default Register;