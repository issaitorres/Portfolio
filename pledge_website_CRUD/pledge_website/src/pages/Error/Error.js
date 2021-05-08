import React from "react";
import "./Error.css";
import Error404 from "../../images/404-error.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-section">
      <div className="error-container">
        <img src={Error404} alt="error-404" />
        <h3>404 - Page Not Found</h3>
        <h5>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </h5>
        <button>
          <Link to="/" className="submit-button">
            Home
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Error;
