"use client"
// import {FiLogOut} from 'react-icons/fi';
import UserImage from '../user/UserImage';
// import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';

import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Search, { ActiveUserType } from './Search';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';





const Navbar = () => {
   
   

  const userSession = useSelector( (state: RootState) => state.user)
  
    const [results, setResults] = useState<ActiveUserType[] | []>([])
     const [query, setQuery] = useState("")
    

    
   
     const handleSearch = async (value: string) => {
       setQuery(value)
   
       if (!value) {
         setResults([])
         return
       }
    const supabase = createClient()
       const { data, error } = await supabase
         .from("profiles")
         .select("*")
         .ilike("username", `%${value}%`)
         .neq("id", userSession.id) 
   
       if (error) {
         console.error(error)
       } else {
         setResults(data || [])
       }
     }
   

    
       const username = userSession?.username

    return (
        <div className=" flex justify-around  items-center bg-transparent px-2 py-4 h-full border-b border-gray-700">
            <div className="flex justify-start items-center w-1/3">
               <button className=''><IoMenu className=" inline text-white text-2xl"/></button>
               <div className=' flex justify-center items-center ml-3'>
               <UserImage username={username}/>
               <h2 className=' text-white ml-2 text-lg'> {username}</h2>
               </div>

               {/* <h1 className=" font-bold text-2xl text-white">Gap!</h1> */}
            
            </div>
            <div className=" flex justify-center items-center ml-2  h-full w-2/3">
            <div className="relative flex justify-start items-center w-full px-3 py-1.5 bg-white/20 rounded-2xl ">
            <input
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="bg-transparent border-0 outline-none text-white w-full placeholder:text-gray-400 focus:placeholder:text-gray-500"
             placeholder="Search User ..."
            />
            <span className=' text-white text-xl '>
                           <BiSearch/>
                        </span>
                    
                     {
                      query && query.length >= 3 && <Search setQuery={setQuery} results={results}/>
                     } 
                     
      </div>
    
                {/* <Link href="/sign-in"><button className=" font-bold text-2xl text-gray-500 hover:text-gray-600 rounded-sm p-1 " title='logout'><FiLogOut/></button></Link> */}
            </div>
               
        </div>
    )
}


export default Navbar;