import Image from '../assets/images/loading.gif'

function Loading() {
    return ( 
        <div className="w-screen h-screen text-center relative" style={{textAlign: 'center'}}>
            <img src={Image} width='50px'/>
        </div>
     );
}

export default Loading;