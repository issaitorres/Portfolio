import React, { useState } from "react";
import emailjs from "emailjs-com";
import { gridData } from "../data";
import "./About.css";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import team from "../images/about_images/the_team.jpg";
import founder from "../images/about_images/the_founder.jpg";
import affection from "../images/about_images/affection.png";
import healthcare from "../images/about_images/healthcare.png";
import grad_cap from "../images/about_images/mortarboard.png";

const About = () => {
  const [hoveringOver, setHoveringOver] = useState(0);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0hl7yfo",
        "template_cf3hlet",
        e.target,
        "user_N25mYSli0NT5wPAraf3z1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const HandleMouseOver = (e) => {
    e.preventDefault();
    setHoveringOver(e.target.id);
  };

  return (
    <section className="section about-section">
      <div className="about-indiv-section">
        <h2 className="section-title">about us</h2>
        <hr />
        <img className="section-image" src={team} alt="team" width="800px" />
        <p>
          Since 2012, Neets has been dedicated to delivering top-quality
          products to all of our customers across the world. What started as an
          orange distribution service has grown into an international fruit
          distribution conglomerate. Various partnerships over the years have
          led to many successes for our company, and our innovative modes of
          distribution have transported hundreds of thousands of fruits,
          directly from farms to tables.
        </p>
      </div>

      <div className="about-indiv-section">
        <h2>Our Founder</h2>
        <hr />

        <img
          className="section-image"
          src={founder}
          alt="founder"
          width="500px"
        />
        <p>
          When Mr. Stein journeyed across the United States looking for a new
          venture, he saw many communities without access to healthy
          alternatives so he took it upon himself to deliver high end nutrition
          and established Nature's Sweets (Neets)
        </p>
      </div>

      <div className="about-indiv-section">
        <div className="community-container">
          <div className="community-heading">
            <h2>Our Community</h2>
            <hr />
          </div>
          <div className="community-wrapper">
            <div className="community-left">
              <p>
                Neets is the world's largest producer and distributor of quality
                fruits, connecting communities and families through
                accessibility, engagement, and expertise. We are a leading
                provider of food nutrition curriculum, professional
                distributuion, and classroom magazines, and a producer of
                educational and popular children’s media. Neets is currently in
                115,000 schools, reaching 1.8 billion homes, 54 million
                students, and 78 million parents/caregivers domestically.
              </p>
            </div>
            <div className="community-right">
              <div className="highlight">
                <div className="highlight-image">
                  <img src={affection} alt="affection" width="50" />
                </div>
                <div className="highlight-desc">
                  <h5>Community Opportunities</h5>
                  <p>
                    Providing communities with access to quality nutrition
                    through local farmer's markets and grocery outlets
                  </p>
                </div>
              </div>
              <div className="highlight">
                <div className="highlight-image">
                  <img src={healthcare} alt="healthcare" width="50" />
                </div>
                <div className="highlight-desc">
                  <h5>In the classroom</h5>
                  <p>
                    Supporting and establishing food nutrition and healthy
                    lifestyles for many students globally
                  </p>
                </div>
              </div>
              <div className="highlight">
                <div className="highlight-image">
                  <img src={grad_cap} alt="graduation_cap" width="50" />
                </div>
                <div className="highlight-desc">
                  <h5>International</h5>
                  <p>
                    The Neets Scholarship is a highly selective, scholarship for
                    marvelous, minority, high school seniors from low-income
                    households. Each year, the scholarship is awarded to 200 of
                    these student leaders, with the intent of helping them reach
                    higher education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-indiv-section">
        <h2>Reviews</h2>
        <hr />

        <h4>
          <ImQuotesLeft size={15} />
          &nbsp;
          {gridData[hoveringOver].review}
          &nbsp;
          <ImQuotesRight size={15} />
        </h4>

        <div className="about-section">
          <div className="grid-container">
            <div className="grid-item" onMouseOver={HandleMouseOver}>
              <img
                src={gridData[0].title}
                alt=""
                id={gridData[0].id}
                className="grid-container-image"
              />
            </div>
            <div className="grid-item" onMouseOver={HandleMouseOver}>
              <img
                src={gridData[1].title}
                alt=""
                id={gridData[1].id}
                className="grid-container-image"
              />
            </div>
            <div className="grid-item" onMouseOver={HandleMouseOver}>
              <img
                src={gridData[2].title}
                alt=""
                id={gridData[2].id}
                className="grid-container-image"
              />
            </div>
            <div className="grid-item" onMouseOver={HandleMouseOver}>
              <img
                src={gridData[3].title}
                alt=""
                id={gridData[3].id}
                className="grid-container-image"
              />
            </div>
            <div className="grid-item" onMouseOver={HandleMouseOver}>
              <img
                src={gridData[4].title}
                alt=""
                id={gridData[4].id}
                className="grid-container-image"
              />
            </div>
            <div className="grid-item" onMouseOver={HandleMouseOver}>
              <img
                src={gridData[5].title}
                alt=""
                id={gridData[5].id}
                className="grid-container-image"
              />
            </div>
            <div className="grid-item" onMouseOver={HandleMouseOver}>
              <img
                src={gridData[6].title}
                alt=""
                id={gridData[6].id}
                className="grid-container-image"
              />
            </div>
            <div className="grid-item" onMouseOver={HandleMouseOver}>
              <img
                src={gridData[7].title}
                alt=""
                id={gridData[7].id}
                className="grid-container-image"
              />
            </div>
            <div className="grid-item" onMouseOver={HandleMouseOver}>
              <img
                src={gridData[8].title}
                alt=""
                id={gridData[8].id}
                className="grid-container-image"
              />
            </div>
            <div className="grid-item" onMouseOver={HandleMouseOver}>
              <img
                src={gridData[9].title}
                alt=""
                id={gridData[9].id}
                className="grid-container-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-indiv-section">
        <h2>Contact Us</h2>
        <hr />
        <div className="about-map">
          <iframe
            title="Neets Location"
            className="responsive-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1503819264826!2d-77.0387184850303!3d38.89767627957061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sThe%20White%20House!5e0!3m2!1sen!2sus!4v1612225464357!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>

        <div className="contact-container">
          <h4>Send us an email!</h4>
          <form onSubmit={sendEmail}>
            <div className="contact-row">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>

            <div className="contact-row">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                required
              />
            </div>

            <div className="contact-row">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>

            <div className="contact-row contact-message">
              <input
                type="text"
                className="form-control contact-message"
                placeholder="Your Message"
                name="message"
                required
              />
            </div>

            <input
              type="submit"
              className="contact-button"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
