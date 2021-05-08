import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container ">
        <Link to={"/"} className="footer-link">
          Home
        </Link>
        <div className="icon-container">
          <GoPrimitiveDot style={{ color: "white" }} />
        </div>
        <Link to={"/About"} className="footer-link">
          About
        </Link>
        <div className="icon-container">
          <GoPrimitiveDot style={{ color: "white" }} />
        </div>
        <Link to={"/Contact"} className="footer-link">
          Contact
        </Link>
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
        <div className="footer-copyright">
          Copyright © The Pledge Organization Inc. 2021 • All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
