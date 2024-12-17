import Input from '../Input'
import Select from '../Select'
import Botton from '../Botton'
import Textarea from '../Textarea';
import File from '../File';


function FormArticles({title, handleOnChange, handleOnChange2, handleOnSubmit, options, data, state, handleAI, buttonAI}) {
   
    return ( 
        <>
        <div className='text-center text-lg font-bold mb-6 text-lime-900'>
            <h2>{title}</h2>
        </div>
        
        <div className='text-center mt-8'>
            <form onSubmit={handleOnSubmit} >
                <Input type={`text`} name={`title`} title={'Title'} placeholder={`Insert the article's title`} handleOnChange={handleOnChange ? handleOnChange : ''} valueprops={data ? data.title : ''} />
                <Input type={`text`} name={`resume`} title={'Resume'} placeholder={`Insert the article's resume`} handleOnChange={handleOnChange ? handleOnChange : ''} valueprops={data ? data.resume : ''} />
                <div className='text-right'>
                    
                    {buttonAI==='ok' && (<Botton type={`button`} type2={`error`} value={`Request AI's help to create a text`} onclick={handleAI}/>)}
                    {buttonAI==='loading' && 'Loading...'}
                    
                </div>
                <Textarea title={'Text'} handleOnChange={handleOnChange2 ? handleOnChange2 : ''} valueprops={data ? data.text : ''} />
               
                {
                data!==undefined && data.file ?
                
                ( 
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 max-w-28">
                        <label className="block text-sm font-medium text-gray-700">Current Image</label>
                        <img alt="Article's" src={`http://localhost:3001/uploads/${data.file}`} />
                    </div>
                    <div className="col-span-1">
                        <File title={`New File`} name={`file`} handleOnChange={handleOnChange ? handleOnChange : ''} state={state} />
                    </div>
                    <div className="col-span-1">
                        <Select title={`Status`} name={`status`} handleOnChange={handleOnChange ? handleOnChange : ''} options={options} valueprops={data ? data.status : ''}/>
                    </div>
                </div>)
                :
                (<div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                    <File title={`File`} name={`file`} handleOnChange={handleOnChange ? handleOnChange : ''} state={state} />
                    </div>
                    <div className="col-span-1">
                    <Select title={`Status`} name={`status`} handleOnChange={handleOnChange ? handleOnChange : ''} options={options} valueprops={data ? data.status : ''}/>
                    </div>
                </div>)
                }
                
                
                <Botton type={`submit`} type2={`success`} value={title}/>
            </form>
        </div>
        
        </>
     );
}

export default FormArticles;