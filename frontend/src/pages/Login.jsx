import axios  from 'axios';
import Botton from '../components/Botton';
import Input from '../components/Input';
import Message from '../components/Message';


import { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';


import { AuthContext } from '../Context/AuthContext';


function Login() {
    
    const apiUrl = process.env.REACT_APP_API_URL;

    const [data, setData] = useState();
    const [message, setMessage] = useState();

    const {login} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleOnChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(apiUrl+`/login`,data)
        .then((result)=>{ 
            setMessage(result.data);
            console.log(result.data.token)
            login(result.data.token);
            setTimeout(()=>{
                setMessage();
                if (result.data.type==='success'){
                    
                    navigate('/dashboard')
                }
                
            },5000);
            
            
        })
        .catch(e => console.log(e))

    }
    
    return ( 
        <>
        <header></header>
        <main>
            <div>
                <form onSubmit={handleSubmit}>
                    {message ? <Message type={message.type} msg={message.msg}/> : ''}
                    <h2>Log In</h2>
                    <Input type="text" name="name" title="Login" handleOnChange={handleOnChange}/>
                    <Input type="password" name="password" title="Password" handleOnChange={handleOnChange}/>
                    <Botton type="submit" type2="danger" value="LOG IN"/>
                </form>
            </div>
        </main>
        <footer></footer>
        </>
     );
}

export default Login;