import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import User from "../components/User";
import { setAuthedUser } from "../actions/authedUser";

function Login({ location }) {
  console.log(location);
  const users = useSelector((state) => state.users);
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = async (user) => {
    dispatch(setAuthedUser(user));
    history.push(location);
  };

  return (
    <div className="login">
      <h2 className="login-header">WYR?</h2>
      <h1>Choose a user to login</h1>
      <div className="login-container">
        {Object.keys(users).map((user) => {
          // let name = users[user].name;
          // let avatarURL = users[user].avatarURL;

          return (
            <div
              className="login-user"
              key={users[user].id}
              onClick={() =>
                clickHandler(
                  users[user]
                  // users[user].id,
                  // users[user].name,
                  // users[user].avatarURL
                )
              }
            >
              <User name={users[user].name} avatarURL={users[user].avatarURL} />
              <p className="login-link">{">"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Login;
