import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Tile = ({ id, title, slogan, links, image, bordercolor }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section>
      <div>
        <h2 className="section-title">{title}</h2>
        <h3 className="section-sub-title">{slogan}</h3>
      </div>
      <div className="section-center-links">
        <Link to={`/${links[0]}`} className="home-link">
          Learn More &gt;
        </Link>
        &nbsp;
        <Link to={`/${links[1]}`} className="home-link">
          Buy &gt;
        </Link>
      </div>
      <img
        className={`section-image`}
        src={image}
        alt="tile"
        data-aos="fade up"
        style={{ border: `5px solid ${bordercolor} ` }}
      />
    </section>
  );
};

export default Tile;
