import { _getUsers } from "../service/_DATA";

export const SET_USERS = "SET_USERS";
export const UPDATE_USERS = "UPDATE_USERS";

const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

// GET users
export const getUsers = () => {
  return (dispatch) => {
    return _getUsers()
      .then((res) => {
        dispatch(setUsers(res));
      })
      .catch((e) => console.error(e));
  };
};

// UPDATE user
export const updateUsers = (authedUser, qid, answer) => {
  return {
    type: UPDATE_USERS,
    payload: {
      authedUser,
      qid,
      answer,
    },
  };
};
