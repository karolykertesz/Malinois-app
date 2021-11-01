import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserIner {
  id: null | string;
  user_name: null | string;
  user_email: null | string;
  status: boolean;
}

type Action = {
  type: string;
  payload: string | boolean | UserIner;
};

const initialState: UserIner = {
  id: null,
  user_name: null,
  user_email: null,
  status: false,
};

const User = createSlice({
  name: "User",
  initialState,
  reducers: {
    addInitUser(state, action: PayloadAction<UserIner>) {
      state = action.payload;
    },
    logOutInitUser(state, action) {
      state = initialState;
    },
  },
});
export default User.reducer;
export const { addInitUser, logOutInitUser } = User.actions;
