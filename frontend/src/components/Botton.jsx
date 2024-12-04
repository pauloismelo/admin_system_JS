function Botton({type, type2, value}) {
    return ( 
        <button type={type} className={`btn-${type2}`}>{value}</button>
     );
}

export default Botton;