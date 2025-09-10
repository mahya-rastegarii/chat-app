// components/EmojiPicker.tsx
"use client"
import React, { useEffect, useRef } from "react";

type Props = {
  onSelect: (emoji: string) => void;
  onClose?: () => void;
  className?: string;
};

const EMOJIS = [
  "😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😍","🤩","😘","😗","😙",
  "😚","😋","😛","😜","🤪","🤨","🫠","😎","🤓","🧐","😕","😟","🙁","☹️","😮",
  "😯","😲","😳","🥺","😢","😭","😤","😠","😡","🤬","🤯","🤗","🤝","🙏","👏",
  "👍","👎","👌","✌️","🤞","🤟","💪","👀","🫶","💖","❤️","🔥","✨","🎉","🎊",
  "🎈","🍕","🍔","🍟","🍣","☕️","🍩","🍪","🌮","🍦"
];

export default function EmojiPicker({ onSelect, onClose, className = "" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose?.();
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className={`w-72 max-h-56 overflow-auto bg-white rounded-lg shadow-lg p-2 ${className}`}
    >
      <div className="grid grid-cols-8 gap-2">
        {EMOJIS.map((em) => (
          <button
            key={em}
            onClick={() => onSelect(em)}
            className="text-xl p-1 rounded hover:bg-gray-100"
            type="button"
            aria-label={`insert ${em}`}
          >
            {em}
          </button>
        ))}
      </div>
    </div>
  );
}
