import { initialState, Signup } from "./reducer-state";

type Sig = {
  type: string;
  payload: string | boolean | number | null;
};

export const userReducer = (state: Signup, action: Sig): any => {
  switch (action.type) {
    case "fname":
      return {
        ...state,
        fname: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "password":
      return {
        ...state,
        password: action.payload,
      };
    case "city":
      return {
        ...state,
        city: action.payload,
      };
    case "display_name":
      return {
        ...state,
        display_name: action.payload,
      };
    case "phone":
      return {
        ...state,
        phone: action.payload,
      };
    case "street":
      return {
        ...state,
        street: action.payload,
      };
    case "surname":
      return {
        ...state,
        surname: action.payload,
      };
    case "city":
      return {
        ...state,
        city: action.payload,
      };
    case "appartment":
      return {
        ...state,
        appartment: action.payload,
      };
    case "photo_url":
      return {
        ...state,
        photo_url: action.payload,
      };
    case "country":
      return {
        ...state,
        country: action.payload,
      };
    case "area_code":
      return {
        ...state,
        area_code: action.payload,
      };
    case "reset":
      return initialState;

    default:
      return state;
  }
};
