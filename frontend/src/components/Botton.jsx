function Botton({type, type2, value, onclick, disabled}) {

    let color;

    if (type2==='error'){
        color='bg-red-600 border-red-900 text-white';
    }else if(type2==='success'){
        color='bg-green-600 border-green-900 text-white';
    }else if(type2==='disable'){
        color='bg-gray-600 border-gray-900 text-white';
    }
    //removed in 18/12/2024
    //const color = type2==='error' ? 'bg-red-600 border-red-900' : 'bg-green-600 border-green-900'

    return ( 
        <button type={type} className={`${color} py-1 px-4 m-1`} onClick={onclick && onclick} disabled={disabled}>{value}</button>
     );
}

export default Botton;