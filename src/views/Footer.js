import React from 'react'
import "../styles/footer.scss";
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="social-links">
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
        <div className="copyright">
            <p>Copyright © 2021 All Rights Reserved</p>
        </div>
    </div>
        
    )
}

export default Footer;
