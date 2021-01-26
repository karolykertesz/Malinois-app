import { combineReducers } from "redux";
import { data } from "./data";
import { authUser } from "./authedUser";

export const reducers = combineReducers({
  authUser,
  data,
});
