
function Message({type, msg}) {

    let backcolor = type==='error' ? 'bg-red-600' : 'bg-green-800';
    

    return ( 
        <div className={`text-white ${backcolor} rounded-md p-2 m-1 text-center m-6`}>{msg}</div>
     );
}

export default Message;