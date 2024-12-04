function Select({name, handleOnChange, options}) {
    return ( 
        <select name={name} onChange={handleOnChange && handleOnChange} required>
            <option value="">Select one option...</option>
            {options && (
                options.map(value => (
                    <option value={value}>{value}</option>
                ))
            )}
        </select>
     );
}

export default Select;