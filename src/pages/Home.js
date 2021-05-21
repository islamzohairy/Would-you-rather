import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeQuestion from "../components/HomeQuestion";
import { sortQuestions } from "../service/helperFunctions";

function Home() {
  const [state, setState] = useState("unanswered");
  const questions = useSelector((state) => state.questions);
  const authedUser = useSelector((state) => state.authedUser);
  const [sortedQuestions, setSortedQuestions] = useState({});

  useEffect(() => {
    setSortedQuestions(sortQuestions(questions));
  }, [questions]);

  return (
    <div className="home">
      <div className="home-header">
        <button
          disabled={state === "unanswered"}
          onClick={() => setState("unanswered")}
        >
          Unanswered questions
        </button>
        <button
          disabled={state === "answered"}
          onClick={() => setState("answered")}
        >
          Answered questions
        </button>
      </div>

      <div className="home-body">
        {Object.keys(sortedQuestions).map((question) => {
          return state === "unanswered"
            ? //unanswered

              !authedUser.answers[question] && (
                <HomeQuestion
                  key={`HomeQuestion` + questions[question].id}
                  question={questions[question]}
                />
              )
            : //answered

              authedUser.answers[question] && (
                <HomeQuestion
                  key={`HomeQuestion` + questions[question].id}
                  question={questions[question]}
                />
              );
        })}
        {!authedUser.answers && state === "answered" && (
          <p>No questions have been answered!</p>
        )}
        {Object.keys(authedUser.answers).length ===
          Object.keys(questions).length &&
          state === "unanswered" && <p>All questions have been answered!</p>}
      </div>
    </div>
  );
}

export default Home;
