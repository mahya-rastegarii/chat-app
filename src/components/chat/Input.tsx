"use client"
import {MdOutlineAttachment, MdSend} from 'react-icons/md';
import { AiOutlinePicture} from 'react-icons/ai';
import { createClient } from '@/utils/supabase/client';
import { useParams } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { useState } from 'react';





const Input = () => {

const supabase = createClient()
const {session} = useUser();
const {conversationId} = useParams() 
      //{ id: conversationId }

const [newMessage, setNewMessage] = useState("")

  const sendMessage = async () => {
    if (!newMessage.trim()) return

    const { error } = await supabase.from("messages").insert({
      conversation_id: conversationId,
      sender_id: session?.user?.id,
      content: newMessage,
    })

    if (error) {
      console.error("sendMessageError", error)
    } else {
      setNewMessage("")
    }
  }


    return(
    
        <div className=' flex justify-between items-center bg-white px-3  h-1/6 border-t border-gray-300'>
            <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} type='text' className=' w-full border-0 outline-none bg-transparent text-gray-900 font-bold placeholder:text-gray-800 placeholder:font-light focus:placeholder:text-slate-300  ' placeholder=' type something ...'/>
            <div className=' flex justify-center items-center text-slate-500 text-2xl font-bold space-x-2'>
                <MdOutlineAttachment className=' cursor-pointer text-gray-600 hover:text-gray-400'/>
                <input type="file" className=' hidden' id="img" />
                <label htmlFor="img">

                <AiOutlinePicture className=' cursor-pointer text-gray-600 hover:text-gray-400'/>
                </label>
                <MdSend onClick={sendMessage} className=' cursor-pointer text-gray-600 hover:text-gray-400 '/>
            </div>
        </div>
    )
}

export default Input ;