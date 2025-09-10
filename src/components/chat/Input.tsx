// components/Input.tsx
"use client"
import { MdOutlineAttachment, MdSend } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { createClient } from "@/utils/supabase/client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import EmojiPicker from "@/components/emoji/EmojiPicker";
import { BsEmojiSmile } from "react-icons/bs";

const Input = () => {
  const supabase = createClient();
  const userSession = useSelector((state: RootState) => state.user);
  const { conversationId } = useParams();

  const [showPicker, setShowPicker] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    const { error } = await supabase.from("messages").insert({
      conversation_id: conversationId,
      sender_id: userSession?.id,
      content: newMessage,
    });

    if (error) {
      console.error("sendMessageError", error);
    } else {
      setNewMessage("");
    }
  };

  return (
    <div className="relative">
     

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="flex justify-between items-center bg-white px-3 h-16 border-t border-gray-300"
      >
        

        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          type="text"
          className="w-full border-0 outline-none bg-transparent text-gray-900 font-medium placeholder:text-gray-400 mx-2"
          placeholder="پیامت رو بنویس..."
        />
      <button
          type="button"
          onClick={() => setShowPicker((show) => !show)}
          className="p-2 hover:bg-gray-200 rounded"
        >
           <BsEmojiSmile className="text-gray-700" />
        </button>
        <div className="flex items-center space-x-2">
          <MdOutlineAttachment className="cursor-pointer text-gray-600 hover:text-gray-400" />
          {/* <label htmlFor="img">
            <AiOutlinePicture className="cursor-pointer text-gray-600 hover:text-gray-400" />
          </label> */}
          <input type="file" className="hidden" id="img" />
          <button type="submit">
            <MdSend className="cursor-pointer text-gray-600 hover:text-gray-400" />
          </button>
        </div>
      </form>
       {showPicker && (
        <div className="absolute bottom-16 right-3 z-50">
          <EmojiPicker
            onSelect={(emoji) => {
              setNewMessage((p) => p + emoji);
            }}
            onClose={() => setShowPicker(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
