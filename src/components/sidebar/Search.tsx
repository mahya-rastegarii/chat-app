"use client"

import { createConversation, findConversation } from "@/actions/conversation/action"
import UserImage from "../user/UserImage"
import { useChat } from "@/context/ChatContext"
import { useSearchUser } from "@/context/SearchUserContext"
import { useUser } from "@/context/UserContext"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"


export type UserProfileType = {
    id: string;
    username: string;
    avatar_url: string
}
export default function Search({setQuery}:{setQuery: (query:string)  => void}) {


  const supabase = createClient()
  const {session} = useUser();
 
   const {setActiveChat} = useChat();
  const {results} = useSearchUser();
  const router = useRouter()

 
  

  const chatUserHandler = async(user : UserProfileType) => {
     setActiveChat(user)

   
  const myId = session?.user?.id
  if (!myId) return

  
  const {data: existingConv, error}= await findConversation(myId, user.id)
    
  let conversationId

  if (existingConv) {
  
    conversationId = existingConv.id
  } else {
  
    const { data: newConv, error: insertError } = await createConversation(myId, user.id)
    
    if (insertError) {
      console.error(insertError)
      return
    }

    conversationId = newConv?.id
  }
    router.push(`/chat/${conversationId}`)
     setQuery("")

  }

  
  return (
    
    <div className="absolute top-12 w-[90%] shadow-4xl bg-gray-950  z-101 rounded-md">
      {
        (results?.length == 0) && <div className=" flex justify-center items-center px-2 py-4"><span className=" text-md text-gray-100/80">
          username does not exist
        </span></div>
      }
      {results?.map((user) => (
        <div
          key={user.id}
          className="flex items-center space-x-3 p-2 hover:bg-gray-800 transition-all  duration-300 ease-in delay-75 cursor-pointer"
         onClick={() => chatUserHandler(user)}>
          <UserImage src={user.avatar_url} username={user.username}/>
          <div>
            <h2 className="font-bold text-lg text-white">{user.username}</h2>
          </div>
       </div> 
      ))}
    </div>
  )
}