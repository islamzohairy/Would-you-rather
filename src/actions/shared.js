import { updateQuestions, setQuestions } from "./questions";
import { updateUsers, setUsers } from "./users";
import { _saveQuestionAnswer } from "../service/_DATA";

// ANSWER handler
export const handleAnswer = (req, prevUsers, prevQuestions) => {
  const { authedUser, qid, answer } = req;
  return (dispatch) => {
    dispatch(updateQuestions(authedUser, qid, answer));
    dispatch(updateUsers(authedUser, qid, answer));

    _saveQuestionAnswer(req)
      .then(() => {
        return {
          msg: "Your vote has been submitted, thank you!",
          status: "success",
        };
      })
      .catch((e) => {
        console.log(e);
        dispatch(setUsers(prevUsers));
        dispatch(setQuestions(prevQuestions));

        return {
          msg: "Your vote was not submitted!, Plsease try again!",
          status: "fail",
        };
      });
  };
};
