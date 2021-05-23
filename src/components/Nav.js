import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { logout } from "../actions/authedUser";
import { useDispatch, useSelector } from "react-redux";

function Nav() {
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;
  const [active, setActive] = useState("/");

  const initialState = {
    transform: "translateY(-120%)",
  };
  const [state, setState] = useState(initialState);

  const clickHandler = (path) => {
    if (path) {
      document.title = path;
    }

    if (state.transform === "translateY(-120%)") {
      setState({ transform: "translateY(0px)" });
    } else {
      setState({ transform: "translateY(-120%)" });
    }
  };

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <div className="nav">
      <div className="nav-left-element">
        <img
          onClick={() => clickHandler()}
          className="bars"
          src="/svgs/menu-bars-svgrepo-com.svg"
          alt=""
        />
      </div>

      <div style={state} className="nav-menu">
        <div className="nav-menu-element">
          {active === "/" ? (
            <div onClick={() => clickHandler()} className="link-active">
              <p>Home</p>
            </div>
          ) : (
            <Link
              onClick={() => clickHandler("WYR? | Home")}
              className="link"
              to="/"
            >
              <p>Home</p>
            </Link>
          )}
        </div>
        <div className="nav-menu-element">
          {active === "/add" ? (
            <div onClick={() => clickHandler()} className="link-active">
              <p>New question</p>
            </div>
          ) : (
            <Link
              onClick={() => clickHandler("WYR? | New Question")}
              className="link"
              to="/add"
            >
              <p>New question</p>
            </Link>
          )}
        </div>
        <div className="nav-menu-element">
          {active === "/leaderboard" ? (
            <div onClick={() => clickHandler()} className="link-active">
              <p>Leaderboard</p>
            </div>
          ) : (
            <Link
              onClick={() => clickHandler("WYR? | Leaderboard")}
              className="link"
              to="/leaderboard"
            >
              <p>Leaderboard</p>
            </Link>
          )}
        </div>

        <div
          onClick={() => {
            dispatch(logout());
            history.push("/");
            document.title = "Would you rather ?";
          }}
          className="nav-menu-element"
        >
          <div className="link">
            <p className="log-out" style={{ color: "#696969" }}>
              {"< "}Logout
            </p>
          </div>
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
      </div>
    </div>
  );
}

export default Nav;
