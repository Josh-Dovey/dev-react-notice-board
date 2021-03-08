// Third Party Code
import { useState, useEffect } from "react";
import cookie from "react-cookies";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

// Styles
import "./App.css";

// Utils
import Fetcher from "./utils/Fetcher";
// import FetchUser from "./utils/FetchUser";

// Components
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Schedules from "./components/Schedules";
import Results from "./components/Results";
import Schedule from "./components/Schedule";
import Month from "./components/Month";
import Notice from "./components/Notice";
import CreateChoice from "./components/CreateChoice";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  const [user, setUser] = useState({});
  const [displayNav, setDisplayNav] = useState(true);
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() => {
          return user.role === "admin" ? (
            children
          ) : (
            <ErrorPage msg="You do not have persmisson to access this route" />
          );
        }}
      ></Route>
    );
  }

  const checkCookieSetUser = async () => {
    if (cookie.load("jwt")) {
      const jwt = cookie.load("jwt");
      const data = await Fetcher(`/api/user/isLoggedIn/${jwt}`);

      setUser(data);
    }

    return;
  };

  useEffect(() => {
    checkCookieSetUser();
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <Nav user={user} setUser={setUser} displayNav={displayNav} />

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/login">
              <Login setUser={setUser} setDisplayNav={setDisplayNav} />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/schedules">
              <Schedules />
            </Route>
            <Route exact path="/schedules/thursday">
              <Results type="thursday" />
            </Route>
            <Route exact path="/schedules/sunday">
              <Results type="sunday" />
            </Route>
            <Route exact path="/schedules/thursday/:slug">
              <Schedule type="thursday" user={user} />
            </Route>
            <Route exact path="/schedules/sunday/:slug">
              <Schedule type="sunday" user={user} />
            </Route>
            <Route exact path="/schedules/thursday/month/:month">
              <Month type="thursday" user={user} />
            </Route>
            <Route exact path="/schedules/sunday/month/:month">
              <Month type="sunday" user={user} />
            </Route>
            <Route exact path="/notice">
              <Notice />
            </Route>
            <PrivateRoute exact path="/create">
              <CreateChoice />
            </PrivateRoute>
            <PrivateRoute exact path="/create/thursday">
              <Create type="thursday" />
            </PrivateRoute>
            <PrivateRoute exact path="/create/sunday">
              <Create type="sunday" />
            </PrivateRoute>
            <PrivateRoute exact path="/edit/thursday/:slug">
              <Edit type="thursday" />
            </PrivateRoute>
            <PrivateRoute exact path="/edit/sunday/:slug">
              <Edit type="sunday" />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
