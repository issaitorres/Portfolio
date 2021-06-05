import React from "react";
import Footer from "../../Components/Footer/Footer";
import time from "../../Images/clock.png";
import "./About.css";

function About() {
  return (
    <section className="page-container">
      <div className="content-wrap">
        <div className="about-container">
          <h1>About</h1>
          <div className="about-info">
            <img src={time} alt="time" />
            <p>
              At Moviegoers we believe that every second is important and there
              isn't enough time in a day to spend hours or minutes scrolling
              through your favorite streaming service searching for the perfect
              movie. We offer a curated up-to-date list of current popular
              movies in any genre that will satisfy your needs. There is no
              infinite scrolling here, just good movies.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default About;
