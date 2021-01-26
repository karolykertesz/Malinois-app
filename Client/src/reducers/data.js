import { ADD_DATA } from "../actions/index";
export const data = (state = {}, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
