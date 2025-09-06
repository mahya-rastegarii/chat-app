"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { createClient } from "@/utils/supabase/client";
import type { Session } from "@supabase/supabase-js";

type UserContextType = {
  session: Session | null;
  loading: boolean;
  setSession: (session: Session | null) => void;
};

const UserContext = createContext<UserContextType>({
  session: null,
  loading: true,
  setSession: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();


    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    
    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ session, loading, setSession }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
