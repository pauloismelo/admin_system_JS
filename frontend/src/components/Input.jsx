function Input({type, name, title, placeholder, handleOnChange, valueprops}) {
    return ( 
        <div className="text-left">
            <label className="block text-sm font-medium text-gray-700">{title}</label>
            <input type={type} name={name} id={name} placeholder={placeholder ? placeholder : ''} onChange={handleOnChange ? handleOnChange : ''} value={valueprops} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md hadow-sm focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-800"/>
        </div>
     );
}

export default Input;