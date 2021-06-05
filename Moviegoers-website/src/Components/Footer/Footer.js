import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import clapperboard from "../../Images/clapperboardbw.ico";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <Link to="/" title="Home">
              <img src={clapperboard} alt="" width="80px" title="Moviegoers" />
            </Link>
          </div>
          <div className="footer-col">
            <h4>Moviegoers</h4>
            <ul className="footer-list">
              <li>
                <Link to="/" title="Home">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>More</h4>

            <ul className="footer-list">
              <li>
                <Link to="/About" title="About">
                  About
                </Link>
              </li>
              <li>
                <Link to="/How-It-Works" title="How It Works">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Social </h4>
            <ul className="footer-list">
              <li>
                <a
                  href="https://github.com/issaitorres/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  title="Github"
                >
                  <FaGithub title="Github" /> Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/issaitorres"
                  target="_blank"
                  rel="noreferrer"
                  title="Linkedin"
                >
                  <FaLinkedin title="Linkedin" /> Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="line" />

        <div className="footer-row-end">
          <p className="footer-col-end">
            &copy;{new Date().getFullYear()} Moviegoers | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
