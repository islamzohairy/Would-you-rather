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
      const { questions } = state;
      const newState = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      return newState;
    }

    case ADD_QUESTION: {
      const { question } = action.payload;
      const { questions } = state;
      const newState = {
        ...questions,
        [question.id]: question,
      };

      return newState;
    }

    default:
      return state;
  }
}
