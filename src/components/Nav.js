import React from "react";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../actions/authedUser";
import { useDispatch, useSelector } from "react-redux";

function Nav() {
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="nav">
      <div className="nav-left">
        <div className="nav-left-element">
          <Link style={{ fontSize: "16px" }} className="link" to="/">
            Home
          </Link>
        </div>
        <div className="nav-left-element">
          <Link className="link" to="/add">
            <p>New</p>
            <p>Question</p>
          </Link>
        </div>
        <div className="nav-left-element">
          <Link className="link" to="/leaderboard">
            <p>Leaderboard</p>
          </Link>
        </div>
      </div>

      <div className="nav-right">
        <div className="nav-right-user-name">
          <p>{authedUser.name}</p>
        </div>
        <div className="nav-right-element">
          <img
            draggable={false}
            src={`/images/${authedUser.avatarURL}`}
            alt={authedUser.name + " img"}
          />
        </div>
        <div
          onClick={() => {
            dispatch(logout());
            history.push("/");
          }}
          className="nav-right-element"
        >
          <p className="link">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
