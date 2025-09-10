// store/slices/sessionSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { Session } from "@supabase/supabase-js"

export type UserState = {
  id: string | null;
  username: string | null;
  avatar_url: string | null;
};

const initialState: UserState = {
  id: null,
  username: null,
  avatar_url: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;