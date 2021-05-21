import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestionHandler } from "../actions/shared";

function NewQuestion() {
  const dispatch = useDispatch();
  const [optionOneText, setOptionOne] = useState("");
  const [optionTwoText, setOptionTwo] = useState("");
  const [msg, setMsg] = useState("");
  const author = useSelector((state) => state.authedUser.id);

  const submitHandler = (event) => {
    event.preventDefault();

    const question = {
      optionOneText,
      optionTwoText,
      author,
    };

    let passA = /^\S/.test(optionOneText);
    let passB = /^\S/.test(optionTwoText);

    if (passA && passB) {
      dispatch(addQuestionHandler(question));
      setOptionOne("");
      setOptionTwo("");
      setMsg("Submit another question ✔️");
    } else {
      if (!passA) {
        setOptionOne("");
      }
      if (!passB) {
        setOptionTwo("");
      }
      setMsg("Invalid text!, please enter a valid text");
    }
  };

  return (
    <div className="new-question">
      <h1>Create a new question</h1>
      <div className="add">
        <h2>Would you rather</h2>
        <div className="add-container">
          <form onSubmit={(event) => submitHandler(event)} className="add-form">
            <input
              required
              onChange={(event) => setOptionOne(event.target.value)}
              type="text"
              placeholder="Enter option A ..."
              value={optionOneText}
            />
            <h3>or</h3>
            <input
              required
              onChange={(event) => setOptionTwo(event.target.value)}
              type="text"
              placeholder="Enter option B ..."
              value={optionTwoText}
            />
            <input type="submit" />
            {msg && (
              <div className="msg">
                <p>{msg}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewQuestion;
