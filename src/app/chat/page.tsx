import Chats from '@/components/sidebar/Chats';
import Navbar from '@/components/sidebar/Navbar';
import Search from '@/components/sidebar/Search';
import { SearchUserProvider } from '@/context/SearchUserContext';
import React from 'react'

const chatPage = () => {
  return (
     
    <>

        
          <div className="flex items-center justify-center h-full w-full text-gray-400">
      Select a user to start chatting
    </div>
 </>
  )
}

export default chatPage;