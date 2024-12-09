function Botton({type, type2, value}) {
    return ( 
        <button type={type} className={`btn-${type2} bg-lime-900 text-white p-2 m-1`}>{value}</button>
     );
}

export default Botton;