"use client"
import { ConversationType } from "@/components/sidebar/Chats";
import { createClient } from "@/utils/supabase/client"

export async function findConversation(userId: string, otherUserId: string) {

  const supabase = await createClient();


  const { data, error } = await supabase
    .from("conversations")
    .select("id")
    .or(`and(user1.eq.${userId},user2.eq.${otherUserId}),and(user1.eq.${otherUserId},user2.eq.${userId})`)
    .maybeSingle()

  if (error && error.code !== "PGRST116") {
    throw error
  }

  return {data, error}
}


export async function createConversation(userId: string, otherUserId: string) {

  const supabase = await createClient()
  const { data, error } = await supabase
    .from("conversations")
    .insert([{ user1: userId, user2: otherUserId }])
    .select("id")
    .single()

  
  return {data, error}
}



export async function getUserConversations (userId: string): Promise<ConversationType[]>{


  const supabase = await createClient();
  const { data, error } = await supabase
    .from("conversations")
    .select(`
      id,
      user1,
      user2,
      user1Profile:profiles!conversations_user1_fkey(id, username, avatar_url),
      user2Profile:profiles!conversations_user2_fkey(id, username, avatar_url),
      messages (
        id, content, created_at, read_by
      )
    `)
    .or(`user1.eq.${userId},user2.eq.${userId}`)
    .order("created_at", { ascending: false }) 
  
     
  if (error) {
    console.error("Error fetching conversations:", error)
    return []
  }


   const conversations = (data ?? []).map(conv => {
    const unreadCount = conv.messages.filter(
      (msg: any) => !msg.read_by?.includes(userId)
    ).length

    return { ...conv, unreadCount }
  })

  return conversations as unknown as ConversationType[]
}