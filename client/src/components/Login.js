import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import cookie from "react-cookies";
import Poster from "../utils/Poster";
import { User, Lock, Shield } from "react-feather";

function Login({ setUser, setDisplayNav }) {
  const [redirect, setRedirect] = useState(false);
  const login = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await Poster(`/api/user/login`, {
        username,
        password,
      });

      if (res.status === "success") {
        // Save JWT to cookie
        cookie.save("jwt", res.token, {
          expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        });

        const userData = res.user;
        setDisplayNav(true);
        setUser(userData);
        setRedirect(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const removeNavBar = () => {
    setDisplayNav(false);
  };

  useEffect(() => {
    removeNavBar();
  }, []);

  return (
    <div className="col--login">
      {redirect ? <Redirect to={`/home`} /> : ""}
      <main className="main--login">
        <div className="centre-text">
          <h1>Login</h1>
          <form className="form form__login" onSubmit={login}>
            <div className="form__group">
              <label className="form__label" htmlFor="username">
                Username:
              </label>
              <input
                className="form__input"
                type="text"
                name="username"
                id="username"
              />
              <User className="form__icon" />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="password">
                Password:
              </label>
              <input
                className="form__input"
                type="password"
                name="password"
                id="password"
              />
              <Lock className="form__icon" />
            </div>

            <button id="login" className="btn btn--login" type="submit">
              Log in
            </button>
          </form>
        </div>
      </main>

      <div className="status__box">
        <div className="status__bg">
          <div className="status__info">
            <Shield className="status__icon" />
            <p className="status__sentence">
              Enter the correct details in order to create, edit and delete
              schedules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
