function Select({title, name, handleOnChange, options}) {
    return ( 
        <div>
            <label>{title} </label>
            <select name={name} onChange={handleOnChange && handleOnChange} required>
                <option value="">Select one option...</option>
                {options && (
                    options.map(value => (
                        <option value={value}>{value}</option>
                    ))
                )}
            </select>
        </div>
     );
}

export default Select;