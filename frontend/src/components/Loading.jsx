import Image from '../assets/images/loading.gif'

function Loading() {
    return ( 
        <div className="w-screen mt-8 text-center relative">
            <img src={Image} width='40px'/>
        </div>
     );
}

export default Loading;