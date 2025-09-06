
"use client"

import React from 'react'
import NavbarChat from './NavbarChat'
import ChatScreen from './ChatScreen'
import Input from './Input'
import { useChat } from '@/context/ChatContext'

const ChatIndexPage = () => {

  const { activeChat } = useChat()

  if(!activeChat){
    return(
      <div className="flex items-center justify-center h-full text-gray-400">
      Select a user to start chatting
    </div>
  )
  }
  return (
   <>

            <NavbarChat/>
            <ChatScreen/>
            <Input/>

  
  </>
  )
}

export default ChatIndexPage;