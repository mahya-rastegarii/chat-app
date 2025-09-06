"use client"
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import UserImage from "../user/UserImage";
import { useChat } from "@/context/ChatContext";
import { useParams } from "next/navigation"
import { createClient } from "@/utils/supabase/client"


type Message = {
  id: string
  sender_id: string
  content: string
  created_at: string
}

const ChatScreen = () => {

    const supabase = createClient()
  
    const { conversationId } = useParams() 

    const {activeChat} = useChat();
    const {session} = useUser();
    const [messages, setMessages] = useState<Message[]>([])
    const [loading, setLoading] = useState(false)

    





  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("conversation_id", conversationId)
        .order("created_at", { ascending: true })

      if (!error && data) {
        setMessages(data as Message[])
      }
      setLoading(false)
    }
    
    if (conversationId) fetchMessages()
  }, [conversationId, supabase])


  useEffect(() => {
    if (!conversationId) return

    const channel = supabase
      .channel(`conversation-${conversationId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as Message])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }

  }, [conversationId, supabase])



  


  if (loading) return <div className="text-white">در حال بارگذاری...</div>

  // if(messages.length === 0) return <div> no message yet</div>
    return (
     
        <div className="bg-gray-100 overflow-y-scroll h-screen p-4 space-y-3">
          {
           (messages.length === 0) && <div className=" w-full h-full flex justify-center items-center text-gray-500/80"><span> no message yet</span></div>
          }
        {messages.map((msg) => {
          const isMe = msg.sender_id === session?.user?.id
      
          return (
            <div
              key={msg.id}
              className={`flex items-start ${
                isMe ? "justify-end" : "justify-start"
              }`}
            >
              {!isMe && (
                <UserImage
                  src={activeChat?.avatar_url}
                  username={activeChat?.username}
                />
              )}
      
              <div
                className={`max-w-xs p-2 mx-2 rounded-2xl ${
                  isMe
                    ? "bg-gray-800 text-white rounded-br-none ml-2"
                    : "bg-white text-gray-900 rounded-bl-none mr-2"
                }`}
              >
                <p>{msg.content}</p>
                <span className="block text-xs opacity-50 mt-1">
                  {new Date(msg.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
      
              {isMe && (
                <UserImage
                  username={session?.user?.user_metadata.username}
                />
              )}
            </div>
          )
        })}
      

      </div>
      
    
    );
}

 
export default ChatScreen;
