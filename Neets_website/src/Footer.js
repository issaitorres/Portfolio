import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <ul>
          <li>
            <h4>Neets</h4>
          </li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Notice</li>
          <h5>
            <FaRegCopyright /> 2021 Neets Inc.
          </h5>
        </ul>

        <ul>
          <li>
            <h4>Main</h4>
          </li>
          <li>
            <Link to={"/"} className="footer-link">
              Home
            </Link>
          </li>

          <li>
            <Link to={"/About"} className="footer-link">
              About
            </Link>
          </li>
          <li>
            <Link to={"/Orange"} className="footer-link">
              Orange
            </Link>
          </li>
          <li>
            <Link to={"/Blueberry"} className="footer-link">
              Blueberry
            </Link>
          </li>
          <li>
            <Link to={"/Dragonfruit"} className="footer-link">
              Dragonfruit
            </Link>
          </li>
          <li>
            <Link to={"/Cart"} className="footer-link">
              Cart
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-icon-container">
        <a
          href="https://github.com/issaitorres/Portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/issaitorres/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={25} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <FaYoutube size={25} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter size={25} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebookSquare size={25} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
