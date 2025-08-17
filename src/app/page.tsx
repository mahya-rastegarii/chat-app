import ChatScreen from "@/components/chat/ChatScreen";
import Input from "@/components/chat/Input";
import NavbarChat from "@/components/chat/NavbarChat";
import Chats from "@/components/sidebar/Chats";
import Navbar from "@/components/sidebar/Navbar";
import Search from "@/components/sidebar/Search";
import { UserType } from "@/components/user/UserImage";
import { createClient } from "@/utils/supabase/server";


export default function Home() {
 
  
  return (
 
    <div className=" h-screen  overflow-hidden flex justify-center items-center shadow-md shadow-gray-200">

    {/* Sidebar */}
    <div className=" h-full relative w-1/3 bg-gradient-to-br from-gray-800 via-gray-900 to-black ">
    <div>

            <Navbar/>
            <Search/>
            <Chats/>
    </div>
    </div>

  {/* Chat Page */}
  <div className=" h-full flex flex-col w-2/3">

            <NavbarChat/>
            <ChatScreen/>
            <Input/>

  
  </div>

    
    </div>
  );
}
