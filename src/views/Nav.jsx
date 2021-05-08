import React,{ useState} from "react";
import "../styles/nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const [newClass] = useState("nav-link");
  
  return (
    <div>
      <nav className="navbar fixed-top container navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <li className="nav-item brand">
          <Link to="/">
            <button className="nav-link">
              <h1>ÓscarS</h1>
            </button>
          </Link>
        </li>

        <div
          className="collapse container-items navbar-collapse"
          id="navbarTogglerDemo03"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to="/">
                  <button className={newClass}>Home</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/curriculum#curriculum">
                  <button className="nav-link">Curriculum</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/github">
                  <button className="nav-link">Github</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <button className="nav-link">Contact</button>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
