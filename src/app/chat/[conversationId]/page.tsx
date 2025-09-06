import ChatScreen from '@/components/chat/ChatScreen';
import Input from '@/components/chat/Input';
import NavbarChat from '@/components/chat/NavbarChat';
import React from 'react'

const conversationPage = () => {



  return (
    <div className=" h-full flex flex-col w-full">
    
         <NavbarChat/>
            <ChatScreen/>
            <Input/>
      
 </div>
  )
}

export default conversationPage;