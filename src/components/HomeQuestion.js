import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomeQuestion({ question }) {
  const users = useSelector((state) => state.users);

  const { id, author, timestamp, optionOne, optionTwo } = question;
  const user = users[author];

  let [month, date, year] = new Date(timestamp).toLocaleDateString().split("/");
  let [hour, minute] = new Date(timestamp).toLocaleTimeString().split(/:| /);

  return (
    <div className="home-question">
      <div className="home-question-user">
        <p>{user.name}</p>
        <pre className="time">
          {hour + ":" + minute} {date + "/" + month + "/" + year}
        </pre>
        <img draggable={false} src={`/images/${user.avatarURL}`} alt="" />
      </div>
      <div className="home-question-options">
        <h3>Would you rather</h3>
        <p>{optionOne.text}</p>
        <span>Or</span>
        <p>{optionTwo.text}</p>
        <Link className="home-question-link" to={`/questions/${id}`}>
          view poll ➜
        </Link>
      </div>
    </div>
  );
}

export default HomeQuestion;
