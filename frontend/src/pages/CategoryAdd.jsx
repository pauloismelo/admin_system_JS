import {useState} from 'react'
import FormCategories from "../components/FormCategories";
import axios from 'axios';

function CategoryAdd() {
    const [data, setData] = useState();
    const apiUrl = process.env.REACT_APP_API_URL;

    const handleOnChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
        console.log(data)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.post(apiUrl+`/categoryadd`, data)
        .then((result) =>{
            
        })
        .catch(e=>console.log(e))
    }

    const options = ['ATIVO','INATIVO'];


    return ( <>
    <FormCategories title={`New Category`} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} options={options}/>
    </> );
}

export default CategoryAdd;