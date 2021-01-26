export const AUTH_USER = "AUTH_USER";
export const ADD_DATA = "ADD_DATA";
export const authUser = (id) => {
  return {
    type: AUTH_USER,
    id,
  };
};

export const addData = (data) => {
  return {
    type: ADD_DATA,
    data,
  };
};
