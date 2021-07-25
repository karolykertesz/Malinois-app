
import {LOG_IN,SIGN_OUT,DELETE_USER} from "./index"
const initialState = {
  id: null,
  user_name: null,
  user_email: null,
  status: false

}

export const singleUser = (state= initialState,action)=> {
  switch(action.type){
    case LOG_IN:
      return {
        state: action.userObj
      }
      default: {
        return state
      }
  }
}




export const usersReducer = (state = [],action)=> {
switch(action.type){
  case SIGN_OUT:
   const currentState = state.filter((item)=> item.id !== action.id)
   return {
     ...currentState
   };
   case DELETE_USER:
    const current = state.filter((item)=> item.id !== action.id)
    return {
      ...current
    };
   case LOG_IN:
     return {
       state:state.concat(action.userObj)
     }
   default: {
     return state;
   }
}

}

