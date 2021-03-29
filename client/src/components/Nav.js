import { Home, Folder, MessageSquare, Edit, Shield } from "react-feather";
import { NavLink } from "react-router-dom";
import cookie from "react-cookies";

function NavSideBar({ user, setUser, displayNav }) {
  const navLinks = ["home", "schedules", "notice"];
  const navIcons = [
    <Home className="nav__icon" />,
    <Folder className="nav__icon" />,
    <MessageSquare className="nav__icon" />,
  ];
  if (user.role === "admin") {
    navLinks.push("create");
    navIcons.push(<Edit className="nav__icon" />);
  }

  const logout = () => {
    cookie.remove("jwt", { path: "/" });
    setUser({});
  };

  return (
    <nav
      className="nav"
      role="navigation"
      style={{ display: displayNav ? "flex" : "none" }}
    >
      <ul>
        {navLinks.map((text, i) => (
          <li key={text}>
            <NavLink
              to={`/${text}`}
              className="nav__link"
              activeClassName="nav__link--active"
            >
              {navIcons[i]}
              {text}
            </NavLink>
          </li>
        ))}

        {user.role === "admin" ? (
          <button className="nav__link nav__link--logout" onClick={logout}>
            <Shield className="nav__icon" />
            Log Out
          </button>
        ) : (
          <NavLink to="/login" className="nav__link nav__link--login">
            <Shield className="nav__icon" /> Log In
          </NavLink>
        )}
      </ul>

      {user.role === "admin" ? (
        <button className="btn btn--logout" onClick={logout}>
          Log out
        </button>
      ) : (
        <NavLink to="/login" className="btn btn--logout">
          Log In
        </NavLink>
      )}
    </nav>
  );
}

export default NavSideBar;
