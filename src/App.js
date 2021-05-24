import "./styles/App.scss";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Nav from "./components/Nav";
import { Switch, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./actions/users";
import { getQuestions } from "./actions/questions";
import { useEffect } from "react";
import { setAuthedUser } from "./actions/authedUser";
import NotFound from "./pages/NotFound";
import Leaderboard from "./pages/Leaderboard";
import NewQuestion from "./pages/NewQuestion";
import Loadingbar from "./components/Loadingbar";
import { Fragment } from "react";
import { startLoading, endLoading } from "./actions/loading";

function App() {
  const dispatch = useDispatch();

  const location = useLocation();

  const authedUser = useSelector((state) => state.authedUser);
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    const func = async () => {
      dispatch(startLoading(2));
      const strUser = sessionStorage.getItem("user");
      if (strUser) {
        const user = JSON.parse(strUser);
        await dispatch(setAuthedUser(user));
      }

      await dispatch(getUsers());

      await dispatch(getQuestions());

      dispatch(endLoading());
    };

    func();
  }, [dispatch]);

  if (!authedUser) {
    if (isLoading) {
      return <Loadingbar />;
    } else {
      return <Login location={location.pathname} />;
    }
  }

  return (
    <div className="app">
      <Nav />

      {isLoading ? (
        <Loadingbar />
      ) : (
        <Fragment>
          <Switch>
            <Route exact path="/questions/:question_id">
              <Question />
            </Route>

            <Route exact path="/add">
              <NewQuestion />
            </Route>

            <Route exact path="/leaderboard">
              <Leaderboard />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </Fragment>
      )}
    </div>
  );
}

export default App;
