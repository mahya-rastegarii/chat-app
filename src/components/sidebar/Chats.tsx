"use client"

import { useEffect, useState } from "react"
import UserImage from "../user/UserImage"
import { getUserConversations } from "@/actions/conversation/action"
import { useUser } from "@/context/UserContext"

type ProfileUserType = {
  id: string
  username: string
  avatar_url: string
}

type MessageType = {
  id: string
  content: string
  created_at: string
}

export type ConversationType = {
  id: string
  user1: string
  user2: string
  user1Profile: ProfileUserType[]  
  user2Profile: ProfileUserType[] 
  messages: MessageType[]
}

const Chats = () => {
  const { session } = useUser()
  const userId = session?.user?.id
  const [conversations, setConversations] = useState<ConversationType[]>([])

  useEffect(() => {
    if (!userId) return;
    async function fetchData() {
      const convs = await getUserConversations(userId)
      setConversations(convs || [])
      console.log("convs", convs)
    }
    
    fetchData()
  }, [userId])

  return (
    <>
      {conversations.map((conv) => {
        const otherUser =
          conv.user1 === userId ? conv.user2Profile[0] : conv.user1Profile[0]

        const lastMessage =
          conv.messages.length > 0
            ? conv.messages[conv.messages.length - 1].content
            : "No message yet"

        return (
          <div
            key={conv.id}
            className="flex space-x-3 p-2 mt-3 hover:bg-gray-900 transition-all duration-300 ease-in delay-75 cursor-pointer"
          >
            <UserImage
              src={otherUser?.avatar_url}
              username={otherUser?.username}
            />

            <div className="flex flex-col">
              <h2 className="font-bold text-lg text-white">
                {otherUser?.username}
              </h2>
              <span className="text-slate-300 text-sm truncate max-w-[200px]">
                {lastMessage}
              </span>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Chats
