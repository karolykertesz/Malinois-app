import { createSlice } from "@reduxjs/toolkit"

const initialState = {
 init: {
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
      state.init = action.payload
    },
    logOutInitUser(state,action){
      state.init = initialState.init
    }
  }
})
export default User.reducer;
export const {addInitUser,logOutInitUser} = User.actions






