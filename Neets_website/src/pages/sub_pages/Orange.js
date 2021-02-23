import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Orange.css";
import { Link } from "react-router-dom";
import farmer1 from "../../images/orange_images/orange_farmer1.jpg";
import farmer2 from "../../images/orange_images/orange_farmer2.jpg";
import valencia_main from "../../images/orange_images/valencia_main.jpg";
import orange_people_1 from "../../images/orange_images/orange_people_1.jpg";
import orange_people_2 from "../../images/orange_images/orange_people_2.jpg";
import foundation_icon from "../../images/orange_images/foundation_icon.png";
import planting_icon from "../../images/orange_images/planting_icon.png";
import harvest_icon from "../../images/orange_images/harvest_icon.png";
import award_icon from "../../images/orange_images/award_icon.png";
import world_icon from "../../images/orange_images/world_icon.png";

const Orange = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="orange-section ">
      <div className="orange-subsection first-section-color">
        <h1 className="section-title">The Valencia</h1>
        <h3>Join in on the fun!</h3>
        <div className="orange-responsive-image-container">
          <img src={valencia_main} alt="valencia_main" />
        </div>
      </div>

      <div className="orange-subsection second-section-color">
        <h1 className="subsection-title">Our journey</h1>

        <div className="timeline">
          <div className="timeline-container timeline-left">
            <div className="timeline-content-first">
              <h2>2012</h2>
              <h3>The Beginning</h3>
              <p>Neet's is Founded. First Orange Grove is planted.</p>
              <img
                src={foundation_icon}
                alt="foundation_icon"
                width="50px"
                height="50px"
                size="50px"
              />
            </div>
          </div>
          <div className="timeline-container timeline-right">
            <div className="timeline-content">
              <h2>2013</h2>
              <h3>Blueberries and Dragonfruits</h3>
              <p>Neet's expands to delivery two more exceptional products</p>
              <img
                src={planting_icon}
                alt="foundation_icon"
                width="50px"
                height="50px"
                size="50px"
              />
            </div>
          </div>
          <div className="timeline-container timeline-left">
            <div className="timeline-content">
              <h2>2016</h2>
              <h3>Harvest Months: April-October</h3>
              <p>Orange Grove is ready for harvest</p>
              <img
                src={harvest_icon}
                alt="harvest_icon"
                width="50px"
                height="50px"
                size="50px"
              />
            </div>
          </div>
          <div className="timeline-container timeline-right">
            <div className="timeline-content">
              <h2>2017</h2>
              <h3>Farmer's Yearly Award</h3>
              <p>
                Neet's is bestowed best new upcoming fruit producer of the year
              </p>
              <img
                src={award_icon}
                alt="award_icon"
                width="50px"
                height="50px"
                size="50px"
              />
            </div>
          </div>
          <div className="timeline-container timeline-left">
            <div className="timeline-content">
              <h2>2018</h2>
              <h3>Global Domination</h3>
              <p>Neets expands to over 30 countries!</p>
              <img
                src={world_icon}
                alt="world_icon"
                width="50px"
                height="50px"
                size="50px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="orange-subsection third-section-color">
        <h1 className="subsection-title">Farmer's Corner</h1>
        <div className="farmer-container">
          <div className="farmer-section-left">
            <p>
              “When I took over my family farm, I had a dream that I would
              deliver high quality nutrition to feed the many communities across
              the nation. I knew it wasn’t going to be easy to achieve this
              dream but I had a lot of help along the way. My family and
              friends, as well as the incredible workers from Neets all
              supported me and my dream was in sight. ”
            </p>
            <h4>-John Doe</h4>
          </div>
          <div className="farmer-section-right">
            <img src={farmer1} alt="farmer_1" />
          </div>
        </div>
        <div className="farmer-container">
          <div className="farmer-section-left">
            <p>
              “Partnering with Neets has really allowed my farm to move in a
              positive direction. I used to labor many additional hours every
              harvest and I used to think that it was just part of the job.
              Thanks to Neets’ effective planning and new automation techniques,
              I can complete the same amount of work much more efficiently. This
              is the result I have been after for so long and I’m really
              thankful for Neets”
            </p>
            <h4>- Jane Doe</h4>
          </div>
          <div className="farmer-section-right">
            <img src={farmer2} alt="farmer_1" />
          </div>
        </div>
      </div>
      <div className="orange-subsection fourth-section-color">
        <h1 className="subsection-title">Our Process</h1>

        <div className="shell-container2">
          <iframe
            title="orange_video"
            className="resp-image-shell"
            src="https://www.youtube.com/embed/bJOtlMcy-9w"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="orange-buy-container">
          <div className="orange-buy-section">
            <h2>100% True Orange Juice</h2>
            <p>
              Many other companies deoxidize (remove oxygen) from their orange
              in order to store it longer. Not at Neets. Our effective
              distribution allows us to bypass this process, only at the expense
              of limited seasonal availability. (Unfortunately, they don’t grow
              all year round.) Regardless, at Neets you are getting the real
              thing, oxygen and all!
            </p>
          </div>
          <div className="orange-buy-section">
            <h2>Pesticide and Preservatives Free </h2>
            <p>
              Pesticides have been used by various companies to protect produce.
              At Neets, we believe there is a better way. With the use of
              biocontrol and polyculture (companion planting), we were able to
              meet our goal of dropping pesticides and preservatives in 2019.
            </p>
          </div>
        </div>
      </div>
      <div className="orange-subsection fifth-section-color">
        <h1 className="subsection-title">Critic Reviews</h1>

        <div className="quote-container">
          <h2>"Somewhere, someone incredible is eating a Neets' Produce"</h2>
          <h4>- Karl Zagan</h4>
        </div>

        <div className="orange-review-container">
          <div className="indiv-review">
            <div className="indiv-review-section">
              <img src={orange_people_1} alt="" width="200px" />
            </div>

            <div
              data-aos="fade-left"
              className="indiv-review-section indiv-review-text"
            >
              <div className="critical-review-text">
                <blockquote>
                  Do yourself a favor and try these oranges. The taste is beyond
                  extraordinary. The staff truly cares about delivering a high
                  quality experience. My sister Ursula and I love sharing this
                  joy with all of our friends!
                </blockquote>
              </div>
              <h4>-Lisa Kudrow, Masseuse/Musician</h4>
            </div>
          </div>
        </div>
        <div className="orange-review-container">
          <div className="indiv-review">
            <div className="indiv-review-section">
              <img src={orange_people_2} alt="" width="200px" />
            </div>

            <div
              data-aos="fade-left"
              className="indiv-review-section indiv-review-text"
            >
              <div className="critical-review-text">
                <blockquote>
                  I’m hooked. I have had multiple orders with Neets and every
                  time is an amazing experience all around. One of the best
                  treasures I can share with family is a Neets orange!
                </blockquote>
              </div>

              <h4>-Nicolas Cage, National Investigator</h4>
            </div>
          </div>
        </div>

        <Link to="/cart">
          <div className="orange-button-container">
            <div className="button1 btn-color-1" href="/#">
              Buy
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Orange;
