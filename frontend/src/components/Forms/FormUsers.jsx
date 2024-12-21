import Input from '../Input'
import Botton from '../Botton'
import { FaCheckCircle } from 'react-icons/fa';

function FormCategories({title, handleOnChange, handleOnSubmit, data , validaPass}) {
    console.log(validaPass)
    let cor0, cor1, cor2;
    if (validaPass[0]){
        cor0='text-green-700 my-2 text-left flex gap-2 align-middle text-xs'
    }else{
        cor0='text-gray-500 my-2 text-left flex gap-2 align-middle text-xs'
    }
    if (validaPass[1]){
        cor1='text-green-700 my-2 text-left flex gap-2 align-middle text-xs'
    }else{
        cor1='text-gray-500 my-2 text-left flex gap-2 align-middle text-xs'
    }
    if (validaPass[2]){
        cor2='text-green-700 my-2 text-left flex gap-2 align-middle text-xs'
    }else{
        cor2='text-gray-500 my-2 text-left flex gap-2 align-middle text-xs'
    }
    return ( 
        <>
        <div className='text-center text-lg font-bold mb-6 text-lime-900'>
            <h2>{title}</h2>
        </div>
        
        <div className='text-center mt-8'>
            <form onSubmit={handleOnSubmit} >
                <Input type={`text`} name={`name`} title={'Name'} placeholder={`Insert the user's name`} handleOnChange={handleOnChange ? handleOnChange : ''} valueprops={data ? data.name : ''} />
                <Input type={`password`} name={`password`} title={'Password'} placeholder={`Insert the user's password`} handleOnChange={handleOnChange ? handleOnChange : ''} valueprops={data ? data.password : ''} />
                <div>
                    <div className={cor0}>
                        <FaCheckCircle/> 1 Letter Upercase
                    </div>
                    <div className={cor1}>
                        <FaCheckCircle/> 1 caracter
                    </div>
                    <div className={cor2}>
                        <FaCheckCircle/> Leaster 6 letters
                    </div>
                </div>
                
                <Botton type={`submit`} type2={`success`} value={title}/>
            </form>
        </div>
        
        </>
     );
}

export default FormCategories;