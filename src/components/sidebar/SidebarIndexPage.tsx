import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
import { SearchUserProvider } from '@/context/SearchUserContext'

const SidebarIndexPage = () => {
  return (
   <div>
     <SearchUserProvider>
               <Navbar/>
               {/* <Search/> */}
     </SearchUserProvider>
               <Chats/>
       </div>
  )
}

export default SidebarIndexPage