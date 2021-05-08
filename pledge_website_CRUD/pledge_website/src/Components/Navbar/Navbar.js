import React, { useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
import { GiSprout } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const sidebarFunc = (e) => {
    showSidebar();
    activateSidebar(e);
  };

  const showSidebar = () => setSidebar(!sidebar);
  const activateSidebar = (e) => {
    var modal = document.getElementById("side-bar-active");
    var span = document.getElementsByClassName("close")[0];

    var counter = 0;
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        console.log(sidebar);
      } else {
        if (counter === 0) {
          counter++;
          modal.style.display = "block";
          console.log(sidebar);
        }
      }
    };
  };

  return (
    <main>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars size={35} className="nav-text" onClick={sidebarFunc} />
        </Link>
        <Link to="/" className="menu-bars">
          <GiSprout size={60} className="title-icon" />
        </Link>
        <a href="https://github.com/issaitorres/Portfolio" target="__blank">
          <FaGithub size={35} className="title-icon" />
        </a>
      </div>
      <nav
        className={sidebar ? " background-fill " : " "}
        id="side-bar-active"
        onClick={sidebarFunc}
      >
        <div
          className={sidebar ? " nav-menu active " : "nav-menu "}
          id="target-2"
        >
          <ul className="nav-menu-items" onClick={sidebarFunc}>
            <Link to="#" className="navbar-toggle">
              <li className="menu-bars nav-text menu-active">
                <FaTimes size={35} />
              </li>
            </Link>
            <Link to={"/"} className="nav-text list-item">
              <li className="nav-text">
                <div className="list-item-text">Home</div>
              </li>
            </Link>
            <Link to={"/About"} className="nav-text list-item">
              <li className="nav-text">
                <div className="list-item-text">About</div>
              </li>
            </Link>
            <Link to={"/Contact"} className="nav-text list-item">
              <li className="nav-text ">
                <div className="list-item-text2">Contact</div>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
