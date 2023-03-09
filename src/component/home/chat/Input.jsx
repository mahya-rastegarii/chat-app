import {MdOutlineAttachment, MdSend} from 'react-icons/md';
import { AiOutlinePicture} from 'react-icons/ai';
// import { IoSend } from 'react-icons/io';




const Input = () => {
    return(
        <div className=' flex justify-between items-center bg-white px-3  h-1/6'>
            <input type='text' className=' w-full border-0 outline-none bg-transparent text-teal-900 font-bold placeholder:text-teal-800 placeholder:font-light focus:placeholder:text-slate-300  ' placeholder=' type something ...'/>
            <div className=' flex justify-center items-center text-slate-500 text-2xl font-bold space-x-2'>
                <MdOutlineAttachment className=' cursor-pointer text-teal-600 hover:text-teal-400'/>
                <input type="file" className=' hidden' id="img" />
                <label htmlFor="img">

                <AiOutlinePicture className=' cursor-pointer text-teal-600 hover:text-teal-400'/>
                </label>
                <MdSend className=' cursor-pointer text-teal-600 hover:text-teal-400 '/>
            </div>
        </div>
    )
}

export default Input ;