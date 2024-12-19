function Botton({type, type2, value, onclick}) {

    let color;

    if (type2==='error'){
        color='bg-red-600 border-red-900';
    }else{
        color='bg-green-600 border-green-900';
    }
    //removed in 18/12/2024
    //const color = type2==='error' ? 'bg-red-600 border-red-900' : 'bg-green-600 border-green-900'

    return ( 
        <button type={type} className={`${color} text-white py-1 px-4 m-1`} onClick={onclick && onclick}>{value}</button>
     );
}

export default Botton;