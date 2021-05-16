export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

// SET auth user
export const setAuthedUser = (id) => {
  return {
    type: SET_AUTHED_USER,
    id,
  };
};

// LOG OUT
export const logout = () => {
  return {
    type: LOGOUT_USER,
    payload: null,
  };
};
