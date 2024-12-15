import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function Textarea({ title, handleOnChange, valueprops}) {
    return ( 
        <div className="text-left">
            <label className="block text-sm font-medium text-gray-700">{title}</label>
            <ReactQuill value={valueprops} onChange={handleOnChange}  />
        </div>
     );
}

export default Textarea;