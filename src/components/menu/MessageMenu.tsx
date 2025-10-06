"use client"
import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { MenuType, Message } from "../chat/ChatScreen"

type MessageItemType = {
 message: Message;
 menu: MenuType | null;
  setMenu: ( type: MenuType | null ) => void;
}

export default function MessageMenu({ message, menu, setMenu }: MessageItemType) {


  const userSession = useSelector((state: RootState) => state.user)
  
 

  
  useEffect(() => {
    const closeMenu = () => setMenu(null)
    document.addEventListener("click", closeMenu)
    return () => document.removeEventListener("click", closeMenu)
  }, [])


  const handleDelete = () => {
    console.log("Delete message:", message.id)
    setMenu(null)
  }

  const handleEdit = () => {
    console.log("Edit message:", message)
    console.log("sessionId", userSession.id, "send_id", message.sender_id)
    setMenu(null)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content)
    setMenu(null)
  }

  const handleForward = () => {
    console.log("Forward message:", message)
    setMenu(null)
  }

  return (
    <>
      {menu && menu.type === "desktop" && (
        <ul
          style={{ top: menu.y, left: menu.x }}
          className="fixed bg-white shadow-lg border rounded-md z-50"
        >
          <li onClick={handleCopy} className="px-4 py-2 hover:bg-gray-100 cursor-pointer"> کپی</li>
          <li onClick={handleForward} className="px-4 py-2 hover:bg-gray-100 cursor-pointer"> فوروارد</li>

          {message.sender_id === userSession.id && (
            <> 
              <li onClick={handleEdit} className="px-4 py-2 hover:bg-gray-100 cursor-pointer"> ویرایش</li>
              <li onClick={handleDelete} className="px-4 py-2 hover:bg-gray-100 cursor-pointer"> حذف</li>
           </> 
          )} 
        </ul>
      )}

    
      {menu && menu.type === "mobile" && (
        <div className="fixed inset-0 bg-black/40 flex items-end z-50">
          <div className="w-full bg-white rounded-t-xl p-4">
            <button onClick={handleCopy} className="w-full py-2"> کپی</button>
            <button onClick={handleForward} className="w-full py-2"> فوروارد</button>
            {message.sender_id === userSession.id && (
              <>
                <button onClick={handleEdit} className="w-full py-2"> ویرایش</button>
                <button onClick={handleDelete} className="w-full py-2 text-red-500"> حذف</button>
              </>
            )}
            <button onClick={() => setMenu(null)} className="w-full py-2 text-gray-500"> بستن</button>
          </div>
        </div>
      )}
    </>
  )
}
