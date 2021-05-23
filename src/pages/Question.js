import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleAnswer } from "../actions/shared";
import NotFound from "./NotFound";

function Question() {
  const dispatch = useDispatch();
  const optionOne = useRef("optionOne");
  const optionTwo = useRef("optionTwo");
  const id = useParams().question_id;

  const state = useSelector((state) => state);
  const question = state.questions[id];

  const users = state.users;

  const userAnswers = state.authedUser.answers;
  const userID = state.authedUser.id;
  const answer = state.authedUser.answers[id];
  const authedAvatar = state.authedUser.avatarURL;

  const isAnswerd = Object.keys(userAnswers).includes(id);

  const [answered, setAnswered] = useState(isAnswerd);
  const [value, setValue] = useState("");
  const [optionOnePercentage, setOptionOnePercentage] = useState(0);
  const [optionTwoPercentage, setOptionTwoPercentage] = useState(0);

  useEffect(() => {
    if (question) {
      setOptionOnePercentage(
        (question.optionOne.votes.length * 100) /
          (question.optionOne.votes.length + question.optionTwo.votes.length)
      );
      setOptionTwoPercentage(
        (question.optionTwo.votes.length * 100) /
          (question.optionOne.votes.length + question.optionTwo.votes.length)
      );
    }

    if (answered) {
      if (answer === "optionOne") {
        optionOne.current.style.border = "4px #a1b3b0 dashed";
      } else {
        optionTwo.current.style.border = "4px #a1b3b0 dashed";
      }
    }
  }, [answer, answered, question]);

  if (!question) {
    return <NotFound />;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (value) {
      const req = {};
      req.authedUser = userID;
      req.qid = id;
      req.answer = value;
      dispatch(handleAnswer(req, state));
      setAnswered(true);
    }
  };

  return (
    <div className="question">
      <div className="poll">
        <div className="poll-user">
          <p>{users[question.author].name}</p>
          <img
            draggable={false}
            src={`/images/${users[question.author].avatarURL}`}
            alt=" "
          />
        </div>
        <div className="poll-body">
          <h3>Would you rather</h3>
          {!answered ? (
            <form onSubmit={(event) => submitHandler(event)}>
              <div className="labels">
                <div className="poll-body-labels">
                  <input
                    className="radio-btn"
                    onClick={() => setValue("optionOne")}
                    name="option"
                    type="radio"
                    value="optionOne"
                  />
                  <label>{question.optionOne.text}</label>
                </div>

                <div className="poll-body-labels">
                  <input
                    className="radio-btn"
                    onClick={() => setValue("optionTwo")}
                    name="option"
                    type="radio"
                    value="optionTwo"
                  />
                  <label>{question.optionTwo.text}</label>
                </div>
              </div>

              <input type="submit" />
            </form>
          ) : (
            <div className="poll-result">
              <div ref={optionOne} className="poll-body-result">
                <div className="poll-result-label">
                  {" "}
                  {question.optionOne.text}
                </div>
                <div className="percetage-container">
                  <div
                    style={{
                      overflow: "visible",
                      display: "flex",
                      width: `${optionOnePercentage}%`,
                      backgroundColor: "#a1b3b05e",
                      fontSize: ".7em",
                      borderLeft: "4px solid #a1b3b0",
                    }}
                  >
                    <p>{optionOnePercentage.toFixed(0)}%</p>
                    {answer === "optionOne" && (
                      <img
                        className="authed-vote-avatar"
                        src={`/images/${authedAvatar}`}
                        alt=" "
                      />
                    )}
                  </div>
                  <p className="out-of">
                    🗳️ {question.optionOne.votes.length} of{" "}
                    {question.optionOne.votes.length +
                      question.optionTwo.votes.length}
                  </p>
                </div>
              </div>

              <div ref={optionTwo} className="poll-body-result">
                <div className="poll-result-label">
                  {" "}
                  {question.optionTwo.text}
                </div>
                <div className="percetage-container">
                  <div
                    style={{
                      overflow: "visible",
                      display: "flex",
                      width: `${optionTwoPercentage}%`,
                      backgroundColor: "#a1b3b05e",
                      fontSize: ".7em",
                      borderLeft: "4px solid #a1b3b0",
                    }}
                  >
                    <p>{optionTwoPercentage.toFixed(0)}% </p>
                    {answer === "optionTwo" && (
                      <img
                        className="authed-vote-avatar"
                        src={`/images/${authedAvatar}`}
                        alt=" "
                      />
                    )}
                  </div>
                  <p className="out-of">
                    🗳️ {question.optionTwo.votes.length} of{" "}
                    {question.optionOne.votes.length +
                      question.optionTwo.votes.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Question;
