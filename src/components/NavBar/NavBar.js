import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg  navbar-light bg-light">
        <div className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/InputContact">
            {" "}
            InputContact
          </Link>
        </div>
      </nav>
      <Outlet></Outlet>
    </Fragment>
  );
};
export default NavBar;
