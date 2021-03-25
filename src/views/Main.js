import React from 'react';
import "../styles/main.scss";
import image from "../img/image.png";
const Main = () => {
    return (
        <div className="container main-container">
            <div className="content-main row">
                <div className="col-6 info">
                    <h5>Hi, this is</h5>
                    <h1><strong>Óscar Sánchez Meza</strong></h1>
                    <h3>Full Stack Developer</h3>
                    <div className="main-social-media">
                        <div className="social-icon"><i className="fab fa-linkedin-in"></i></div>
                        <div className="social-icon"><i className="fab fa-github"></i></div>
                        <div className="social-icon"><i className="fab fa-twitter-square"></i></div>
                        <div className="social-icon"><i className="fab fa-whatsapp"></i></div>
                        <div className="social-icon"><i className="far fa-envelope"></i></div>
                    </div>

                </div>
                <div className="col-6 image-main">
                    <img src={image} alt="something" />
                </div>
            </div>
        </div>
    )
}

export default Main
