import React from "react";
import { Link } from "react-router-dom";
import Error404 from "../images/home_images/error-404.png";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <img src={Error404} alt="error-404" />
        <h1>Oh No!</h1>
        <h3>404 - Page Not Found</h3>
        <h5>
          Anyway, the page you are looking for might have been removed, had its
          name changed, or is temporarily unavailable.
        </h5>

        <Link to="/">
          <div className="error-button-container">
            <div className="button5 btn-color-5" href="/#">
              Home
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Error;
