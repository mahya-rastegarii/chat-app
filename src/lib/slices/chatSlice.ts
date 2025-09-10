
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ActiveUserType = {
  id: string | null;
  username: string | null;
  avatar_url: string | null;
}

type ChatState = {
  activeChat: ActiveUserType | null
}

const initialState: ChatState = {
  activeChat: null,
}

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveChat: (state, action: PayloadAction<ActiveUserType>) => {
      state.activeChat = action.payload
    },
    clearActiveChat: (state) => {
      state.activeChat = null
    },
  },
})

export const { setActiveChat, clearActiveChat } = chatSlice.actions
export default chatSlice.reducer
