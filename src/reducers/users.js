import {
  SET_USERS,
  UPDATE_USERS_AFTER_ANSWER,
  UPDATE_USERS_AFTER_ADD,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...action.users,
      };

    case UPDATE_USERS_AFTER_ANSWER: {
      const { authedUser, qid, answer } = action.payload;
      console.log(authedUser, qid, answer);
      const newState = {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      return newState;
    }

    case UPDATE_USERS_AFTER_ADD: {
      const { authedUser, question } = action.payload;

      const newState = {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat([question.id]),
        },
      };

      return newState;
    }

    default:
      return state;
  }
}
