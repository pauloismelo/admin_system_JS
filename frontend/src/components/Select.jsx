function Select({title, name, handleOnChange, options, valueprops}) {
    return ( 
        <div className="text-left">
            <label className="block text-sm font-medium text-gray-700">{title}</label>
            <select value={valueprops} name={name} onChange={handleOnChange && handleOnChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md hadow-sm focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-800">
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