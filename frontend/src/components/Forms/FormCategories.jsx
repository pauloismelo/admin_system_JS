import Input from '../Input'
import Select from '../Select'
import Botton from '../Botton'

function FormCategories({title, handleOnChange, handleOnSubmit, options, data}) {
    
    return ( 
        <>
        <div className='text-center text-lg font-bold mb-6 text-lime-900'>
            <h2>{title}</h2>
        </div>
        
        <div className='text-center mt-8'>
            <form onSubmit={handleOnSubmit} >
                <Input type={`text`} name={`name`} title={'Name'} placeholder={`Insert the category's name`} handleOnChange={handleOnChange ? handleOnChange : ''} valueprops={data ? data.name : ''} />
                <Select title={`Status`} name={`status`} handleOnChange={handleOnChange ? handleOnChange : ''} options={options} valueprops={data ? data.status : ''}/>
                <Botton type={`submit`} type2={`success`} value={`Edit Category`}/>
            </form>
        </div>
        
        </>
     );
}

export default FormCategories;