import React from "react";
import "../styles/nav.scss";
const Nav = () => {
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
        <a className="navbar-brand" href="true">
          <h1>Óscar Sánchez</h1>
        </a>

        <div className="collapse container-items navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
           
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link"href="true">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="true">
                Curriculum
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="true">
                Github
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="true">
                Contact
              </a>
            </li>
          </ul>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
