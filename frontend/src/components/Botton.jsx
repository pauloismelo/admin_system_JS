function Botton({type, type2, value, onclick}) {

    const color = type2==='error' ? 'bg-red-600 border-red-900' : 'bg-green-600 border-green-900'

    return ( 
        <button type={type} className={`${color} text-white py-1 px-4 m-1`} onClick={onclick && onclick}>{value}</button>
     );
}

export default Botton;