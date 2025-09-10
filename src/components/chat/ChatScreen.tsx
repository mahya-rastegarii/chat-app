"use client"
import { useEffect, useRef, useState } from "react";
import UserImage from "../user/UserImage";
import { useParams } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

type Message = {
  id: string
  sender_id: string
  content: string
  created_at: string
  read_by: string[]   // چون ستون jsonb آرایه است
}

const ChatScreen = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const supabase = createClient()
  const { conversationId } = useParams() 
  const { activeChat } = useSelector((state: RootState) => state.chat)
  const userSession = useSelector((state: RootState) => state.user)

  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  function formatTehranTime(utcDate: string) {
    const date = new Date(utcDate)
    return date.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    })
  }

  // گرفتن پیام‌ها
  useEffect(() => {
    const fetchMessages = async () => {
      if (!conversationId || !userSession.id) return
      setLoading(true)

      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("conversation_id", conversationId)
        .order("created_at", { ascending: true })

      if (!error && data) {
        const msgs = data as Message[]
        setMessages(msgs)

        // 🔥 آپدیت پیام‌های نخونده
        for (const msg of msgs) {
          if (!msg.read_by?.includes(userSession.id)) {
            await supabase
              .from("messages")
              .update({
                read_by: JSON.stringify([...(msg.read_by || []), userSession.id]),
              })
              .eq("id", msg.id)
          }
        }
      }
      setLoading(false)
    }
    fetchMessages()
  }, [conversationId, supabase, userSession.id])

  // گوش دادن برای پیام‌های جدید
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
        async (payload) => {
          const newMsg = payload.new as Message
          setMessages((prev) => [...prev, newMsg])

          // 🔥 پیام جدید رو هم برای کاربر فعلی read کن
          if (!newMsg.read_by?.includes(userSession.id)) {
            await supabase
              .from("messages")
              .update({
                read_by: JSON.stringify([...(newMsg.read_by || []), userSession.id]),
              })
              .eq("id", newMsg.id)
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [conversationId, supabase, userSession.id])

  // اسکرول به آخر
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages])

  if (loading) return <div className="text-white">در حال بارگذاری...</div>

  return (
    <div ref={containerRef} className="bg-gray-100 overflow-y-scroll h-screen p-4 space-y-3">
      {messages.length === 0 && (
        <div className=" w-full h-full flex justify-center items-center text-gray-500/80">
          <span> no message yet</span>
        </div>
      )}

      {messages.map((msg) => {
        const isMe = msg.sender_id === userSession?.id

        return (
          <div
            key={msg.id}
            className={`flex items-start ${isMe ? "justify-end" : "justify-start"}`}
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
                {formatTehranTime(msg.created_at)}
              </span>
            </div>

            {isMe && (
              <UserImage username={userSession?.username} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ChatScreen
