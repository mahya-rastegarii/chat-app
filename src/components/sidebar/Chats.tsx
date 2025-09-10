"use client"

import { useEffect, useState, useCallback } from "react"
import UserImage from "../user/UserImage"
import { findConversation, getUserConversations } from "@/actions/conversation/action"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"

type ProfileUserType = {
  id: string
  username: string
  avatar_url: string
}

type MessageType = {
  id: string
  content: string
  created_at: string
  read_by: string[]
}

export type ConversationType = {
  id: string
  user1: string
  user2: string
  user1Profile: ProfileUserType
  user2Profile: ProfileUserType
  messages: MessageType[]
  unreadCount: number
}

const Chats = () => {
  const userSession = useSelector((state: RootState) => state.user)
  const userId = userSession.id
  const router = useRouter()
  const [conversations, setConversations] = useState<ConversationType[]>([])

  const fetchConversations = useCallback(async () => {
    if (!userId) return
    try {
      const convs = await getUserConversations(userId)
      setConversations(convs || [])
    } catch (err) {
      console.error("Error fetching conversations:", err)
    }
  }, [userId])

  
  useEffect(() => {
    fetchConversations()
  }, [fetchConversations])


  useEffect(() => {
    if (!userId) return
  
    const supabase = createClient();
    
    const channel = supabase
      .channel("messages-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        (payload) => {
          console.log("Message change detected:", payload)
         
          fetchConversations()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [userId, fetchConversations])


  const getConversation = async (otherId: string) => {
    if (!userId) return
    try {
      const { data, error } = await findConversation(userId, otherId)
      if (data) {
        router.push(`/chat/${data.id}`)
      } else {
        console.error("getConversation Error:", error)
      }
    } catch (err) {
      console.error("getConversation Exception:", err)
    }
  }

  return (
    <>
      {conversations.map((conv) => {
        const otherUser =
          conv.user1 === userId ? conv.user2Profile : conv.user1Profile

        const lastMessage =
          conv.messages.length > 0
            ? conv.messages[conv.messages.length - 1].content
            : "No message yet"

        return (
          <div
            key={conv.id}
            className="flex space-x-3 p-2 mt-3 hover:bg-gray-900 transition-all duration-300 cursor-pointer"
            onClick={() => getConversation(otherUser.id)}
          >
            <UserImage
              src={otherUser?.avatar_url}
              username={otherUser?.username}
            />

            <div className="flex flex-col flex-1 min-w-0">
              <h2 className="font-bold text-lg text-white truncate">
                {otherUser?.username}
              </h2>
              <div className="flex justify-between items-center w-full">
                <span className="text-slate-300 text-sm truncate max-w-[200px]">
                  {lastMessage}
                </span>
                {conv.unreadCount > 0 && (
                  <span className="bg-red-700 text-white text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0">
                    {conv.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Chats
