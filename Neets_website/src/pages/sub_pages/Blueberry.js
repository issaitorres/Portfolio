import React, { useState } from "react";
import { Link } from "react-router-dom";
import { creationData } from "../../data";
import "./Blueberry.css";
import blueberry_pie from "../../images/blueberry_images/Blueberry-Pie.jpg";
import blueberry_icecream from "../../images/blueberry_images/blueberry-Icecream.jpg";
import blueberry_smoothie from "../../images/blueberry_images/Blueberry-Smoothie.jpg";
import creator_1 from "../../images/blueberry_images/creator_1.jpg";
import creator_2 from "../../images/blueberry_images/creator_2.jpg";
import creator_3 from "../../images/blueberry_images/creator_3.jpg";
import rating from "../../images/blueberry_images/rating.png";
import cashback from "../../images/blueberry_images/cashback.png";

const Blueberry = () => {
  // User Creation Modal Variables
  const [creationTitle, setCreationTitle] = useState("");
  const [creationImage, setCreationImage] = useState("");
  const [creationCreatorImage, setCreationCreatorImage] = useState("");
  const [creationDesc, setCreationDesc] = useState("");
  const [creationIngredients, setCreationIngredients] = useState([]);
  const [creationDirections, setCreationDirections] = useState([]);

  const activateModal = (e) => {
    setCreationTitle(creationData[e.target.id].title);
    setCreationImage(creationData[e.target.id].image);
    setCreationCreatorImage(creationData[e.target.id].creator_image);
    setCreationDesc(creationData[e.target.id].creator_desc);
    setCreationIngredients(creationData[e.target.id].ingredients);
    setCreationDirections(creationData[e.target.id].directions);

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
      modal.style.display = "none";
    };

    var counter = 0;
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      } else {
        if (counter === 0) {
          counter++;
          modal.style.display = "block";
        }
      }
    };
  };

  return (
    <section className="blue-section">
      <div className="snap-scroll-container">
        <div className="item">
          <div className="heroImage">
            <div className="heroContents">
              <h1>The Rabbiteye</h1>
              <h3>
                Where <span style={{ color: "#4073f5" }}>blue </span>
                meets you.
              </h3>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="about-area">
            <h3 className="about-area-title">Our Product</h3>
            <ul className="about-content">
              <li className="about-left"></li>
              <li className="about-right">
                <div className="about-right-content">
                  <h2>Rabbiteye Blueberries</h2>
                  <p>
                    When it comes to blueberries, Neets has mastered the growth
                    and effective distribution in order to meet the needs of all
                    customers. Neets’ Rabbiteye blueberries are grown free of
                    all pesticides. With the boom of automation, Neets has been
                    able to meet the high demand for our products and provide
                    fierce competition in the agricultural sector.
                  </p>
                  <h3>Blueberry Nutrition Information per 1 cup (148 g)</h3>
                  <p>· Calories: 85 calories</p>
                  <p>· Carbohydrates: 21g</p>
                  <p>· Fiber: 4g, 14% Daily Value (DV)</p>
                  <p>· Protein: 1g</p>
                  <p>· Fat: 0g</p>
                  <p>· 36% DV of Vitamin K</p>
                  <p>· 25% DV of Manganese</p>
                  <p>· 24% DV of Vitamin C</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="heading">
            <h1>User Creations</h1>
          </div>
          <div className="user-creation-section">
            <div className="user-creation-wrapper">
              <div className="user-creation-heading">
                <div className="user-creation-container">
                  <div className="user-creation-container-card">
                    <div className="user-creation-container-cardInfo">
                      <img src={blueberry_icecream} alt="blueberry_icecream" />
                      <h3>Blueberry Ice cream</h3>
                      <div className="profile">
                        <img src={creator_1} alt="creator_1" />
                      </div>
                      <p>Robert Downey Jr.</p>
                      <button className="button" id="0" onClick={activateModal}>
                        View Recipe
                      </button>
                    </div>
                  </div>
                  <div className="user-creation-container-card">
                    <div className="user-creation-container-cardInfo">
                      <img
                        src={blueberry_smoothie}
                        alt="blueberry_icecream"
                        height="100px"
                      />
                      <h3>Blueberry Smoothie</h3>
                      <div className="profile">
                        <img src={creator_2} alt="creator_2" />
                      </div>
                      <p>Mary Elizabeth Winstead</p>
                      <button className="button" id="1" onClick={activateModal}>
                        View Recipe
                      </button>
                    </div>
                  </div>
                  <div className="user-creation-container-card">
                    <div className="user-creation-container-cardInfo">
                      <img src={blueberry_pie} alt="blueberry_pie" />
                      <h3>Blueberry Filled Pie</h3>
                      <div className="profile">
                        <img src={creator_3} alt="creator_3" />
                      </div>
                      <p>Henry Cavill</p>
                      <button className="button" id="2" onClick={activateModal}>
                        View Recipe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="heading">
            <h1>Customer Satisfaction</h1>
          </div>
          <div className="blueberry-buy-container">
            <div className="blueberry-buy-section">
              <img src={rating} alt="rating" width="200px" />
              <h2>5 years of Amazing Customer Service</h2>
              <p>
                At Neets, we take pride in meeting the needs of all of our
                customers. That’s the “Neets Difference” as we like to call it,
                and we’re excited to show this unique distinction for each and
                every customer!
              </p>
            </div>
            <div className="blueberry-buy-section">
              <img src={cashback} alt="cashback" width="200px" />
              <h2>Money Back Guarantee </h2>
              <h3>If your not satisfied, we're not satisfied</h3>
              <p>
                That's why we'll happily give you your money back on any
                shipment of Neet's products.*
              </p>
              <p>*Only for shipments over 100 lbs</p>
            </div>
          </div>
          <Link to="/cart">
            <div className="blueberry-button-container">
              <div className="button2 btn-color-2" href="/#">
                Buy
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div id="myModal" className="modal">
        <div className="blueberry-modal-content">
          <span className="close">&times;</span>
          <div className="blueberry-modal-content-container">
            <div className="blueberry-modal-content-container-left">
              <div className="blueberry-modal-content-container-section-main">
                <h2>{creationTitle}</h2>
                <img src={creationImage} alt="creator_image" />
                <div>By</div>
              </div>

              <div className="blueberry-modal-content-container-section-main blueberry-modal-profile">
                <img
                  src={creationCreatorImage}
                  alt="creator_image"
                  width="100"
                />
                <div> {creationDesc}</div>
              </div>
            </div>
            <div className="blueberry-modal-content-container-right">
              <div className="blueberry-modal-content-container-section-text">
                <h4> Ingredients</h4>
                <hr />
                {creationIngredients.map((item) => {
                  return <div>· {item}</div>;
                })}
              </div>

              <div
                className="blueberry-modal-content-container-section-text
              "
              >
                <h4> Directions</h4>
                <hr />
                {creationDirections.map((item) => {
                  return <div>· {item}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blueberry;
