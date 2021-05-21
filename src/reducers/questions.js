import {
  SET_QUESTIONS,
  UPDATE_QUESTIONS_AFTER_ANSWER,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...action.questions,
      };

    case UPDATE_QUESTIONS_AFTER_ANSWER: {
      const { authedUser, qid, answer } = action.payload;

      const newState = {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      return newState;
    }

    case ADD_QUESTION: {
      const { question } = action.payload;

      const newState = {
        ...state,
        [question.id]: question,
      };

      return newState;
    }

    default:
      return state;
  }
}
