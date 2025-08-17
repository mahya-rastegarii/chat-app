"use client"
// import {FiLogOut} from 'react-icons/fi';
import UserImage from '../user/UserImage';
// import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';

import { BiSearch } from 'react-icons/bi';
import { useUser } from '@/context/UserContext';

const Navbar = () => {
   
   

    const {session} = useUser();
   
   
       const username = session?.user.user_metadata.username;

    return (
        <div className=" flex justify-between items-center bg-transparent px-3 py-4 h-full border-b border-gray-700">
            <div className="flex justify-center items-center space-x-2">
               <button className=''><IoMenu className=" inline text-white text-2xl"/></button>
               <UserImage username={username}/>
               <h2 className=' text-white  text-lg'> {username}</h2>

               {/* <h1 className=" font-bold text-2xl text-white">Gap!</h1> */}
            
            </div>
            <div className=" flex justify-center items-center space-x-2 h-full">
                <span className=' text-white text-xl'>
                           <BiSearch/>
                        </span>
                {/* <Link href="/sign-in"><button className=" font-bold text-2xl text-gray-500 hover:text-gray-600 rounded-sm p-1 " title='logout'><FiLogOut/></button></Link> */}
                
            </div>
        </div>
    )
}


export default Navbar;