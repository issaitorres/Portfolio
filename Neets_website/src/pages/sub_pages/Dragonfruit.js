import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Dragonfruit.css";
import { Link } from "react-router-dom";
import MainDragonfruit from "../../images/dragonfruit_images/dragonfruit_black.jpg";
import DragonfruitFarmer from "../../images/dragonfruit_images/dragonfruit_farmer.jpg";
import Distribute from "../../images/dragonfruit_images/distribute.jpg";
import Endless_dragonfruit from "../../images/dragonfruit_images/endless_dragonfruit.jpg";
import Newspaper_example from "../../images/dragonfruit_images/news_arthr.jpg";

const Orange = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="container">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="header">
        <h1 className="animated-underline">The Year of the Dragon</h1>
      </div>
      <div className="main-image">
        <img src={MainDragonfruit} alt="Dragonfruit" />
      </div>
      <div className="shine-section">
        <h1 className="shine">
          <p>Let's Get Started!</p>
        </h1>
      </div>
      <div className="detail-container-left" data-aos="fade-right">
        <h2> The journey of our dragonfruits begins in one location...</h2>
      </div>
      <div data-aos="fade-left" className="detail-container-right">
        <h2>South America</h2>
      </div>

      <div
        className="image-container"
        data-aos="zoom-in-up"
        data-aos-duration="3000"
      >
        <img
          src={DragonfruitFarmer}
          alt="Dragonfruit-farmer"
          className="responsive"
        />
      </div>
      <div className="information-container">
        <div className="information-container">
          The dragon fruit is native to South America and although other
          companies have tried to replicate this growth in the states, the taste
          has suffered significantly. At Neets, we believe in providing only the
          best products for our customers. Thanks to our enormous distribution
          hubs, we have the ability to quickly and effectively bring in dragon
          fruit across borders without sacrificing quality. This is the “Neets
          Difference”.
        </div>
      </div>
      <div className="dual-underline">
        <h2>Good for your health</h2>
        <h3>Nutrition Facts!</h3>
      </div>
      <div className="grid-container">
        <div className="sample-container">
          {/* think about anchor placement keep or not? */}
          <div data-aos="zoom-out-up" data-aos-anchor-placement="center-center">
            <i className="fa fa-5x fa-heartbeat fa-gradient1"></i>
          </div>

          <div data-aos="zoom-out-up" data-aos-anchor-placement="center-center">
            <p>53 calories per 100g</p>
          </div>

          <div data-aos="zoom-out-up" data-aos-anchor-placement="center-center">
            <i className="fa fa-5x fa-check-circle fa-gradient2"></i>
          </div>

          <div data-aos="zoom-out-up" data-aos-anchor-placement="center-center">
            <p>High levels of vitamin C helps boost immunity</p>
          </div>

          <div data-aos="zoom-out-up" data-aos-anchor-placement="center-center">
            <i
              className="fa fa-5x fa-gear fa-gradient3"
              data-aos="zoom-out-up"
            ></i>
          </div>

          <div data-aos="zoom-out-up" data-aos-anchor-placement="center-center">
            <p>Contains no unhealthy saturated fats</p>
          </div>

          <div data-aos="zoom-out-up" data-aos-anchor-placement="center-center">
            <i
              className="fa fa-5x fa-superpowers fa-gradient4"
              data-aos="zoom-out-up"
            ></i>
          </div>

          <div data-aos="zoom-out-up" data-aos-anchor-placement="center-center">
            <p data-aos="zoom-out-up" data-aos-anchor-placement="center-center">
              Linked to a reduction in the blood sugar levels, great for people
              with type 2 diabetes
            </p>
          </div>

          <div data-aos="zoom-out-up" data-aos-anchor-placement="center-center">
            <i
              className="fa fa-5x fa-diamond fa-gradient5"
              data-aos="zoom-out-up"
            ></i>
          </div>
          <div data-aos="zoom-out-up" data-aos-anchor-placement="center-center">
            <p data-aos="zoom-out-up" data-aos-anchor-placement="center-center">
              Helps keep your hair nourished and healthy
            </p>
          </div>
        </div>
      </div>

      <div className="dragonfruit-review-container">
        <div className="dragonfruit-indiv-review">
          <div
            className="dragonfruit-indiv-review-section"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-once="true"
          >
            <img src={Endless_dragonfruit} alt="endless_dragonfruit" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            className="dragonfruit-indiv-review-section dragonfruit-indiv-review-text"
            data-aos-once="true"
          >
            <div className="dragonfruit-critical-review-text">
              <h3>Quality over quantity</h3>
              At Neets, we have developed a rigorous screening process for all
              of our products. This selective process not only allows us to
              decide which produce to keep, but also determines where to ship,
              depending on when the fruit will be at its pinnacle of ripeness.
              We are constantly looking for ways to improve, build upon, and
              better this system because customer satisfaction is essential to
              us.
            </div>
          </div>
        </div>
      </div>

      <div className="dragonfruit-review-container">
        <div className="dragonfruit-indiv-review">
          <div
            className="dragonfruit-indiv-review-section"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-once="true"
          >
            <img src={Distribute} alt="endless_dragonfruit" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            className="dragonfruit-indiv-review-section dragonfruit-indiv-review-text"
          >
            <div className="dragonfruit-critical-review-text">
              <h3>Peak Distribution </h3>
              With the completion of our new distribution center, Neets will be
              able to deliver produce at a faster pace and expand our reach. Our
              ability to provide for many customers with little variance in
              pricing is a fundamental value of the Neets brand, and one we are
              particularly proud of.
            </div>
          </div>
        </div>
      </div>

      <div className="newspaper-container">
        <h2>Neets in the News</h2>
        <img src={Newspaper_example} alt="newspaper_clip" />
      </div>

      <div className="comet-background circular-comet">
        <h1 className="shine">
          <p>Check us out!</p>
        </h1>
        <div className="comet-anim-container">
          <div className="loader">
            <span></span>
          </div>
          <div className="center-image"></div>
        </div>
      </div>

      <Link to="/cart">
        <div className="dragonfruit-button-container">
          <div className="button3 btn-color-3" href="/#">
            Buy
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Orange;
