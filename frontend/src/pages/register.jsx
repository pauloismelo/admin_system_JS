import axios from 'axios';
import styles from '../assets/css/Register.modules.css'
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
        <>
        <header></header>
        <main>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    {message ? <Message type={message.type} msg={message.msg}/> : ''}
                    <h2>New User</h2>
                    <Input type="text" name="name" title="Login" handleOnChange={handleOnChange}/>
                    <Input type="password" name="password" title="Password" handleOnChange={handleOnChange}/>
                    <Botton type="submit" type2="danger" value="REGISTER"/>
                </form>
            </div>
        </main>
        <footer></footer>
        </>
     );
}

export default Register;