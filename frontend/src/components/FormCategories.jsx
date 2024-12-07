import Input from './Input'
import Select from './Select'
import Botton from './Botton'

function FormCategories({title, handleOnChange, handleOnSubmit, options}) {
    
    //const options = ['ATIVO','INATIVO']
    return ( 
        <>
        <h2>{title}</h2>
        <form onSubmit={handleOnSubmit} >
            <Input type={`text`} name={`name`} title={'Name'} placeholder={`Insert the category's name`} handleOnChange={handleOnChange ? handleOnChange : ''} />
            <Select title={`Status`} name={`status`} handleOnChange={handleOnChange ? handleOnChange : ''} options={options}/>
            <Botton type={`submit`} type2={`danger`} value={`ADD`}/>
        </form>
        </>
     );
}

export default FormCategories;