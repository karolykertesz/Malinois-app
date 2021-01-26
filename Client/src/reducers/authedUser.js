import { AUTH_USER } from "../actions/index";

export const authUser = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return action.id;
  }
};
