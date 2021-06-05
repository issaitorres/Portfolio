import React from "react";
import Footer from "../../Components/Footer/Footer";
import filmcut from "../../Images/film_cut.png";
import { Link } from "react-router-dom";

import "./Error.css";

function Error() {
  return (
    <section className="page-container">
      <div className="content-wrap">
        <div className="error-container">
          <h1>Error 404 oh no!</h1>
          <img src={filmcut} alt="filmcut" />
          <p>
            We couldn't find that movie!! or it doesn't exist!! or our movie
            list was updated and it's no longer available!! or aliens!! Sorry
            about that!
          </p>
          <Link to="/">
            <button className="button ">Home</button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Error;
