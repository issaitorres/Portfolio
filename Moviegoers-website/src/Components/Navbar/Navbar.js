import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <main>
      <div className="navbar">
        <Link to="/" title="Home">
          <h1>Moviegoers</h1>
        </Link>
      </div>
    </main>
  );
}

export default Navbar;
