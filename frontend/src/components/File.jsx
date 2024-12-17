import axios from "axios";
import {useDropzone} from 'react-dropzone'
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

import Message from "./Message";

function File({title, name, state}) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [message, setMessage] = useState();
    const [archive, setArchive] = useState();

    
    //function to delete file
    const handleDelete = async (imageName) =>{
       const image = imageName.replace('uploads/','');
       console.log(image)
        try{
            const response = await axios.delete(apiUrl+`/articles/upload`, {
                data: {image}
            });
            setMessage({
                type: response.data.type,
                msg: response.data.msg
            });
            setArchive();// If okay, remove file's name of th state
            setTimeout(()=>{
                setMessage();
            },3000)

        } catch(err){
            console.log(err)
            setMessage({
                type: 'error',
                msg: 'Error in server'
            });
            setTimeout(()=>{
                setMessage();
            },3000)
        }

    }

    // Function will be call when the users select file in our computer
    const onDrop = (acceptedFiles) => {
        // Pegando o primeiro arquivo
        const file = acceptedFiles[0];

        // Verify if file exists
        if (!file) {
            setMessage({
                type: 'error',
                msg: 'File not selected!'
            });
            setTimeout(()=>{
                setMessage();
            },3000)
        return;
        }

        // Create formData to send file
        const formData = new FormData();
        formData.append('file', file);

        // making the requisition POST to backend
        axios.post(apiUrl+'/articles/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        })
        .then((response) => {
            setMessage({
                type: response.data.type,
                msg: response.data.msg
            });
            //get the real name by backedn
            const nameFile = response.data.file.filename;
            //save this filename in state
            state((prevData)=>({...prevData, nameFile}))
            
            //get the path+name to save in state and show to user below the Drag&Drop
            setArchive(response.data.file.path)
            setTimeout(()=>{
                //clear the message
                setMessage();
            },3000)
            //console.log('Return by server:', response.data);
        })
        .catch((error) => {
            setMessage({
                type:'error',
                msg:'Error to send file<br>Try again!'
            });
            setTimeout(()=>{
                setMessage();
            },3000)
        });
    };

    // Configurações do React Dropzone
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,  // Impede selecionar múltiplos arquivos
        //accept: '.png,.jpg,.jpeg,.gif,.pdf' // Tipos de arquivos permitidos (exemplo: imagens e PDFs)
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
          },
    });


    
    return ( 
        <div className="text-left">
            <label className="block text-sm font-medium text-gray-700">{title}</label>
            
            
            {
            archive ?
            (
                <div className="text-center max-w-28">
                    <div>
                        <img alt="Article's" src={`http://localhost:3001/${archive}`} />
                    </div>
                    <div className="inline-flex items-center justify-center w-full h-full">
                        <FaTrash onClick={() => {handleDelete(archive)}} className="text-red-600 cursor-pointer" alt="Delete file"/>
                    </div>
                
                    <input type="hidden" name={name} value={archive} />
                </div>
            )
            :
            (
                /* Área Drag and Drop */
                <div
                    {...getRootProps()}
                    style={{
                    border: '2px dashed #007bff',
                    borderRadius: '8px',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    }}
                    
                >
                    <input {...getInputProps()} name={name} />
                    <p>Arraste e solte um arquivo aqui ou clique para selecionar</p>
                </div>
            )
            
            
            }
                
            {message ? (<Message type={message.type} msg={message.msg}/>) : ''}
                
        </div>
     );
}

export default File;