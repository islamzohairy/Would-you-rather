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
      const { users } = state;
      const newState = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      return newState;
    }

    case UPDATE_USERS_AFTER_ADD: {
      const { authedUser, question } = action.payload;
      const { users } = state;
      const newState = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([question.id]),
        },
      };

      return newState;
    }

    default:
      return state;
  }
}
