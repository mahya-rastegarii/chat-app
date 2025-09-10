"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { createClient } from "@/utils/supabase/client"
import { setUser, clearUser } from "./slices/userSlice"

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch()
  const supabase = createClient()

  useEffect(() => {
    const initSession = async () => {
      const { data } = await supabase.auth.getSession()
      const user = data.session?.user

      if (user) {
        dispatch(setUser({
          id: user.id,
          username: user.user_metadata.username,
          avatar_url: user.user_metadata.avatar_url,
        }))
      } else {
        dispatch(clearUser())
      }
    }

    initSession()

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      const user = newSession?.user
      if (user) {
        dispatch(setUser({
          id: user.id,
          username: user.user_metadata.username,
          avatar_url: user.user_metadata.avatar_url,
        }))
      } else {
        dispatch(clearUser())
      }
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [dispatch, supabase])

  return <>{children}</>
}
