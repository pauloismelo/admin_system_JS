import '../assets/css/Components.modules.css'

function Message({type, msg}) {
    return ( 
        <div className={`Message_${type}`}>{msg}</div>
     );
}

export default Message;