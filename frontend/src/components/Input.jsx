function Input({type, name, title, placeholder, handleOnChange, valueprops}) {
    return ( 
        <div>
            <label>{title} </label>
            <input type={type} name={name} id={name} placeholder={placeholder ? placeholder : ''} onChange={handleOnChange ? handleOnChange : ''} value={valueprops && valueprops} required/>
        </div>
     );
}

export default Input;