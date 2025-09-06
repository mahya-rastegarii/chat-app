import { ConversationType } from "@/components/sidebar/Chats";
import { createClient } from "@/utils/supabase/server"

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

// export async function getUserConversations(userId: string): Promise<ConversationType[]>{

//   const supabase = await createClient()
//   const { data, error } = await supabase
//     .from("conversations")
//     .select(`
//       id,
//       user1,
//       user2,
//       user1Profile:profiles!conversations_user1_fkey(id, username, avatar_url),
//       user2Profile:profiles!conversations_user2_fkey(id, username, avatar_url),
//       messages (
//         id,
//         content,
//         created_at
//       )
//     `)
//     .or(`user1.eq.${userId},user2.eq.${userId}`)
//     .order("created_at", { foreignTable: "messages", ascending: false })

//   if (error || !data) {
//     console.error("getUserConversations error:", error)
//     return []
//   }

//     return data as unknown as ConversationType[];
// }

export async function getUserConversations (userId: string): Promise<ConversationType[]>{

  const supabase = await createClient()
  const { data, error } = await supabase
    .from("conversations")
    .select(`
      id,
      user1,
      user2,
      user1Profile:profiles!conversations_user1_fkey(id, username, avatar_url),
      user2Profile:profiles!conversations_user2_fkey(id, username, avatar_url),
      messages (
        id, content, created_at
      )
    `)
    .or(`user1.eq.${userId},user2.eq.${userId}`)
    .order("created_at", { ascending: false }) // آخرین کانورسیشن بالا باشه
  

  if (error) {
    console.error("Error fetching conversations:", error)
    return []
  }
  return data as unknown as ConversationType[];
}
