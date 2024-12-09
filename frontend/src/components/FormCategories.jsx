import Input from './Input'
import Select from './Select'
import Botton from './Botton'

function FormCategories({title, handleOnChange, handleOnSubmit, options}) {
    
    //const options = ['ATIVO','INATIVO']
    return ( 
        <>
        <div className='text-center text-lg font-bold mb-6 text-lime-900'>
            <h2>{title}</h2>
        </div>
        
        <div className='text-center mt-8'>
            <form onSubmit={handleOnSubmit} >
                <Input type={`text`} name={`name`} title={'Name'} placeholder={`Insert the category's name`} handleOnChange={handleOnChange ? handleOnChange : ''} />
                <Select title={`Status`} name={`status`} handleOnChange={handleOnChange ? handleOnChange : ''} options={options}/>
                <Botton type={`submit`} type2={`danger`} value={`Add Category`}/>
            </form>
        </div>
        
        </>
     );
}

export default FormCategories;