export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS";

// SET auth user
export const setAuthedUser = ({ id, name, avatarURL, answers, questions }) => {
  let user = { id, name, avatarURL, answers, questions };

  sessionStorage.setItem("user", JSON.stringify(user));

  return {
    type: SET_AUTHED_USER,
    payload: {
      id,
      name,
      avatarURL,
      answers,
      questions,
    },
  };
};

export const updateAuthedUserAnswers = (qid, answer) => {
  return {
    type: UPDATE_USER_ANSWERS,
    payload: {
      qid,
      answer,
    },
  };
};

// LOG OUT
export const logout = () => {
  sessionStorage.removeItem("user");

  return {
    type: LOGOUT_USER,
    payload: null,
  };
};
