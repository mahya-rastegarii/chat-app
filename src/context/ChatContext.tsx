"use client"

import { createContext, useContext, useState } from "react"
import { UserProfileType } from "../components/sidebar/Search"

type ChatContextType = {
  activeChat: UserProfileType | null
  setActiveChat: (userInfo: UserProfileType) => void
}

const ChatContext = createContext<ChatContextType | null>(null)

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [activeChat, setActiveChat] = useState<UserProfileType | null>(null)

  return (
    <ChatContext.Provider value={{ activeChat, setActiveChat }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const ctx = useContext(ChatContext)
  if (!ctx) throw new Error("useChat must be used inside ChatProvider")
  return ctx
}
