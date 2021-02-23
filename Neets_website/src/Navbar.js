import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaGithub } from "react-icons/fa";
import { GiOrange } from "react-icons/gi";
import { Link } from "react-router-dom";
import { links } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>

          <Link to="/">
            <GiOrange size={45} style={{ fill: "black" }} />
          </Link>

          <div className="nav-toggle">
            <a href="https://github.com/issaitorres/Portfolio" target="__blank">
              <FaGithub size={25} style={{ fill: "black" }} />
            </a>
          </div>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                  <hr />
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          <a href="https://github.com/issaitorres/Portfolio" target="__blank">
            <FaGithub size={45} style={{ fill: "black" }} />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
