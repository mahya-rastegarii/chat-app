
import { configureStore } from "@reduxjs/toolkit"
import userReducer  from "./slices/userSlice"
import storage from "redux-persist/lib/storage"
import chatReducer from "./slices/chatSlice"
import { persistStore, persistReducer } from "redux-persist"


const persistConfig = {
  key: "chat",
  storage,
  whitelist: ["activeChat"], 
}

const persistedChatReducer = persistReducer(persistConfig, chatReducer)

export const store = configureStore({
    reducer: {
      user: userReducer,
      chat: persistedChatReducer,
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  })



export const persistor = persistStore(store)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
