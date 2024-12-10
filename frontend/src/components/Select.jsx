function Select({title, name, handleOnChange, options, valueprops}) {
    return ( 
        <div>
            <label>{title} </label>
            <select value={valueprops} name={name} onChange={handleOnChange && handleOnChange} required className="border-spacing-1 border-2 m-1 text-sm">
                <option value="">Select one option...</option>
                {options && (
                    options.map(value => (
                        <option key={value} value={value}>{value}</option>
                    ))
                )}
            </select>
        </div>
     );
}

export default Select;