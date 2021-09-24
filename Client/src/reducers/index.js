import { configureStore } from "@reduxjs/toolkit"
import User from "./userReducer"
import { MaliStart } from "./mali.api.reducer"

export const store = configureStore({
  reducer: {
    userInit: User,
    [MaliStart.reducerPath]: MaliStart.reducer
  },
  middleware: (getDefaultMiddleware)=> {
    return getDefaultMiddleware().concat(MaliStart.middleware)
  },

  devTools: process.env.NODE_ENV !== 'production'
})