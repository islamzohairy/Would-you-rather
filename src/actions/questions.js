import {
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "../service/_DATA";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const UPDATE_QUESTIONS_AFTER_ANSWER = "UPDATE_QUESTIONS_AFTER_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

const setQuestions = (questions) => {
  return {
    type: SET_QUESTIONS,
    questions,
  };
};

// GET question
export const getQuestions = () => {
  return (dispatch) => {
    return _getQuestions()
      .then((res) => {
        dispatch(setQuestions(res));
      })
      .catch((e) => console.error(e));
  };
};

// UPDATE question
export const updateQuestionsAfterAnswer = (authedUser, qid, answer) => {
  return {
    type: UPDATE_QUESTIONS_AFTER_ANSWER,
    payload: {
      authedUser,
      qid,
      answer,
    },
  };
};

// ADD question
export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    payload: { question },
  };
};
