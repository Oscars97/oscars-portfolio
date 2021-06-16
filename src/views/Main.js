/*jshint esversion: 6 */
import React from "react";
import "../styles/main.scss";
import image from "../img/image.png";
import {Link} from "react-router-dom";
const Main = () => {
  return (
    <main className="container main-container">
      <div className="content-main row">
        <div className="col-6 info">
          <h5>Hi, this is</h5>
          <h1>
            <strong>Óscar Sánchez Meza</strong>
          </h1>
          <h3>Full Stack Developer</h3>
          <div className="main-social-media">
            <div className="social-icon">
              <a
                
                href="https://www.linkedin.com/in/oscars97/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="social-icon">
                <a
                href="https://github.com/Oscars97"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                </a>
            </div>
            <div className="social-icon">
            <a
                href="https://twitter.com/nicesocksbb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter-square"></i>
                </a>
            </div>
            <div className="social-icon">
            <a
                href="https://wa.me/50670174607?text=Hi,%20Óscar%20I%20would%20like%20to%20talk%20to%20you!"
                target="_blank"
                rel="noopener noreferrer"
              >
              <i className="fab fa-whatsapp"></i>
              </a>
            </div>
            <div className="social-icon">
            <a
                href="mailto:oscarsanchezmeza97@gmail.com"                target="_blank"
                rel="noopener noreferrer"
              >
              <i className="far fa-envelope"></i>
              </a>
            </div>
          </div>
          <Link to="/projects" className="btn btn-block button-projects">MY WORK</Link>
        </div>
        <div className="col-6 image-main">
          <img src={image} alt="something" />
        </div>
      </div>
    </main>
  );
};

export default Main;
