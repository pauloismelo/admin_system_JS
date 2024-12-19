import Input from '../Input'
import Botton from '../Botton'

function FormCategories({title, handleOnChange, handleOnSubmit, data}) {
    
    return ( 
        <>
        <div className='text-center text-lg font-bold mb-6 text-lime-900'>
            <h2>{title}</h2>
        </div>
        
        <div className='text-center mt-8'>
            <form onSubmit={handleOnSubmit} >
                <Input type={`text`} name={`name`} title={'Name'} placeholder={`Insert the user's name`} handleOnChange={handleOnChange ? handleOnChange : ''} valueprops={data ? data.name : ''} />
                <Input type={`password`} name={`password`} title={'Password'} placeholder={`Insert the user's password`} handleOnChange={handleOnChange ? handleOnChange : ''} valueprops={data ? data.password : ''} />
                
                <Botton type={`submit`} type2={`success`} value={title}/>
            </form>
        </div>
        
        </>
     );
}

export default FormCategories;