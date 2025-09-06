"use client"

import { UserProfileType } from "@/components/sidebar/Search";
import React, { createContext, useContext, useState } from "react"


export type SearchUserContextType = {
  results: UserProfileType[] | null;
  setResults: (result: UserProfileType[] | []) => void;
}
const SearchUserContext = createContext<SearchUserContextType>(
    {
       results: null,
       setResults:() => {},
    }
);


 export function SearchUserProvider({ children }: { children: React.ReactNode }){
 

       const [results, setResults] = useState<UserProfileType[] | []>([])
  


    return(
        <SearchUserContext.Provider value={{results, setResults}}>
        {
            children
        }
        </SearchUserContext.Provider>
    )
}


export function useSearchUser (){
    const ctx = useContext(SearchUserContext);
   if(!ctx) throw new Error("useSearchUser must be used inside SearchUserProvider");
   return ctx;
}