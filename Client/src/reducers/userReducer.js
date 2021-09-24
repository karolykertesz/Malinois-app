import { createSlice } from "@reduxjs/toolkit"

const initialState = {
 initUser: {
  id: null,
  user_name: null,
  user_email: null,
  status: false
 }

}

const User = createSlice({
  name: "User",
  initialState,
  reducers:{
    addInitUser(state,action){
      state.initUser = action.payload
    },
    logOutInitUser(state,action){
      state.initUser = initialState.initUser
    }
  }
})
export default User.reducer;
export const {addInitUser,logOutInitUser} = User.actions






