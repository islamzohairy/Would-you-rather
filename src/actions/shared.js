import {
  updateQuestionsAfterAnswer,
  setQuestions,
  addQuestion,
} from "./questions";
import { updateUsersAfterAnswer, setUsers, updateUsersAfterAdd } from "./users";
import { _saveQuestionAnswer, _saveQuestion } from "../service/_DATA";
import { updateAuthedUserAnswers, setAuthedUser } from "./authedUser";

// ANSWER handler
export const handleAnswer = (req, prevState) => {
  const { authedUser, qid, answer } = req;
  return (dispatch) => {
    dispatch(updateUsersAfterAnswer(authedUser, qid, answer));
    dispatch(updateQuestionsAfterAnswer(authedUser, qid, answer));
    dispatch(updateAuthedUserAnswers(qid, answer));

    _saveQuestionAnswer(req)
      .then(() => {
        return {
          msg: "Your vote has been submitted, thank you!",
          status: "success",
        };
      })
      .catch((e) => {
        console.log(e);
        dispatch(setUsers(prevState.users));
        dispatch(setQuestions(prevState.questions));
        dispatch(setAuthedUser(prevState.authedUser));

        return {
          msg: "Your vote was not submitted!, Plsease try again!",
          status: "fail",
        };
      });
  };
};

// ADD handler
export const addQuestionHandler = (question) => {
  return (dispatch) => {
    _saveQuestion(question)
      .then((res) => {
        dispatch(addQuestion(res));
        dispatch(updateUsersAfterAdd(res, question.author));
      })
      .catch((e) => console.error(e));
  };
};
