import { _getUsers } from "../service/_DATA";
import { updateLoading } from "./loading";

export const SET_USERS = "SET_USERS";
export const UPDATE_USERS_AFTER_ADD = "UPDATE_USERS_AFTER_ADD";
export const UPDATE_USERS_AFTER_ANSWER = "UPDATE_USERS_AFTER_ANSWER";

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

// GET users
export const getUsers = () => {
  return async (dispatch) => {
    await _getUsers()
      .then(async (res) => {
        await dispatch(setUsers(res));
        await dispatch(updateLoading());
      })
      .catch((e) => console.error(e));
  };
};

// UPDATE users after ANSWER a question
export const updateUsersAfterAnswer = (authedUser, qid, answer) => {
  return {
    type: UPDATE_USERS_AFTER_ANSWER,
    payload: {
      authedUser,
      qid,
      answer,
    },
  };
};

// UPDATE users after ADD a question
export const updateUsersAfterAdd = (question, authedUser) => {
  return {
    type: UPDATE_USERS_AFTER_ADD,
    payload: {
      question,
      authedUser,
    },
  };
};
