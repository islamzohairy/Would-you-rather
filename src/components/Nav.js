import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const logoutHandler = () => {};

  return (
    <div className="nav">
      <div className="nav-left">
        <div className="nav-left-element">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-left-element">
          <Link to="/add">
            <p>New</p> <p>Question</p>
          </Link>
        </div>
        <div className="nav-left-element">
          <Link to="/leaderboard">
            <p>Leaderboard</p>
          </Link>
        </div>
      </div>

      <div className="nav-right">
        <div className="nav-right-element">
          <p>User</p>
        </div>
        <div onClick={logoutHandler} className="nav-right-element">
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
