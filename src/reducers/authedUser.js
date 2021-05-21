import {
  SET_AUTHED_USER,
  LOGOUT_USER,
  UPDATE_USER_ANSWERS,
} from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      let { id, name, avatarURL, answers, questions } = action.payload;
      return {
        ...state,
        id,
        name,
        avatarURL,
        answers,
        questions,
      };

    case LOGOUT_USER:
      return action.payload;

    case UPDATE_USER_ANSWERS:
      let { qid, answer } = action.payload;
      return {
        ...state,
        answers: {
          ...state.answers,
          [qid]: answer,
        },
      };

    default:
      return state;
  }
}
