import React, { useState, useEffect } from "react";
import "./Cart.css";
import { slidingData } from "../data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { GiOrange } from "react-icons/gi";
import valencia_boxes from "../images/cart_images/valencia_boxes.png";
import blueberry_boxes from "../images/cart_images/blueberry_boxes.jpeg";
import dragonfruit_boxes from "../images/cart_images/dragonfruit_boxes.jpg";
import orange_icon from "../images/cart_images/orange.png";
import blueberry_icon from "../images/cart_images/blueberry.png";
import dragonfruit_icon from "../images/cart_images/dragon-fruit.png";
import home_icon from "../images/cart_images/house.png";
import truck_icon from "../images/cart_images/truck.png";
import fruit_tree_icon from "../images/cart_images/fruit-tree.png";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [orangeQuantity, setOrangeQuantity] = useState(0);
  const [blueberryQuantity, setBlueberryQuantity] = useState(0);
  const [dragonfruitQuantity, setDragonfruitQuantity] = useState(0);

  const clearCart = () => {
    setOrangeQuantity(0);
    setBlueberryQuantity(0);
    setDragonfruitQuantity(0);
  };

  const increaseOrangeAmount = () => {
    setOrangeQuantity(orangeQuantity + 1);
  };

  const decreaseOrangeAmount = () => {
    setOrangeQuantity(orangeQuantity - 1);

    if (orangeQuantity <= 0) {
      setOrangeQuantity(0);
    }
  };

  const increaseBlueberryAmount = () => {
    setBlueberryQuantity(blueberryQuantity + 1);
  };

  const decreaseBlueberryAmount = () => {
    setBlueberryQuantity(blueberryQuantity - 1);

    if (blueberryQuantity <= 0) {
      setBlueberryQuantity(0);
    }
  };

  const increaseDragonfruitAmount = () => {
    setDragonfruitQuantity(dragonfruitQuantity + 1);
  };

  const decreaseDragonfruitAmount = () => {
    setDragonfruitQuantity(dragonfruitQuantity - 1);

    if (dragonfruitQuantity <= 0) {
      setDragonfruitQuantity(0);
    }
  };

  const activateModal = () => {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
      modal.style.display = "block";
    };

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

  // customer reviews
  // const [slide, setSlide] = useState(slidingData);
  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  useEffect(() => {
    const lastIndex = slidingData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  // }, [index, slidingData]);

  useEffect(() => {
    setTotal(
      orangeQuantity * 3 + blueberryQuantity * 6 + dragonfruitQuantity * 8
    );
  }, [orangeQuantity, blueberryQuantity, dragonfruitQuantity]);

  return (
    <section className="shopping-cart-section">
      <div className="shopping-cart-container ">
        <h2>Shopping Cart</h2>

        <div className="shopping-cart-container-header">
          <h4>items</h4>
          <h4>Quantity</h4>
        </div>
        <hr style={{ border: "1px solid black" }} />

        <div className="cart-item-container">
          <div className="cart-item">
            <div className="cart-item-section">
              <h4>Valencia Oranges</h4>

              <img src={valencia_boxes} alt="valencia_boxes" width="200" />
              <p>$3 per pound</p>
            </div>
            <div className="cart-item-section">
              <button className="cart-button" onClick={increaseOrangeAmount}>
                <TiArrowSortedUp size={20} />
              </button>
              <p> {orangeQuantity} pounds</p>
              <button className="cart-button" onClick={decreaseOrangeAmount}>
                <TiArrowSortedDown size={20} />
              </button>
            </div>
          </div>
          <hr style={{ margin: "0px 20px" }} />

          <div className="cart-item">
            <div className="cart-item-section">
              <h4>Rabbiteye Blueberries</h4>

              <img src={blueberry_boxes} alt="valencia_boxes" width="200" />
              <p>$6 per pound</p>
            </div>
            <div className="cart-item-section">
              <button className="cart-button" onClick={increaseBlueberryAmount}>
                <TiArrowSortedUp size={20} />
              </button>
              <p> {blueberryQuantity} pounds</p>
              <button className="cart-button" onClick={decreaseBlueberryAmount}>
                <TiArrowSortedDown size={20} />
              </button>
            </div>
          </div>
          <hr style={{ margin: "0px 20px" }} />

          <div className="cart-item">
            <div className="cart-item-section">
              <h4>Jaina Dragon Fruit</h4>

              <img src={dragonfruit_boxes} alt="valencia_boxes" width="200" />
              <p>$8 per pound</p>
            </div>
            <div className="cart-item-section">
              <div className="cart-item-section">
                <button
                  className="cart-button"
                  onClick={increaseDragonfruitAmount}
                >
                  <TiArrowSortedUp size={20} />
                </button>
                <p> {dragonfruitQuantity} pounds</p>
                <button
                  className="cart-button"
                  onClick={decreaseDragonfruitAmount}
                >
                  <TiArrowSortedDown size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ border: "1px solid black" }} />

        <div className="shopping-cart-container-header bottom-cart-container-footer">
          <h4>Total</h4>
          <h4>
            $ <span>{total}</span>
          </h4>
        </div>

        <div onClick={clearCart} className="cart-button-style clear-cart-color">
          clear cart
        </div>

        <div
          className="cart-button-style place-order-color"
          onClick={activateModal}
          id="myBtn"
        >
          Place Order
        </div>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>

            {orangeQuantity === 0 &&
            blueberryQuantity === 0 &&
            dragonfruitQuantity === 0 ? (
              <div className="modal-content-info-order">
                Try ordering one of our products!
              </div>
            ) : (
              <div className="modal-content-info">
                <div className="cart-icon-container">
                  <div>
                    <GiOrange size={50} style={{ fill: "black" }} />
                  </div>
                </div>
                <p>
                  Thank you for order. Please allow 5-6 business days for your
                  order to arrive.
                </p>
                <div className="modal-content-info-order">
                  {orangeQuantity === 0 ? (
                    ""
                  ) : (
                    <div className="cart-icon-container">
                      <img
                        src={orange_icon}
                        alt="orange_icon"
                        className="cart-icon-mini"
                      />
                      {orangeQuantity} pounds of Valencia Oranges
                    </div>
                  )}

                  {blueberryQuantity === 0 ? (
                    ""
                  ) : (
                    <div className="cart-icon-container">
                      <img
                        src={blueberry_icon}
                        alt="orange_icon"
                        className="cart-icon-mini"
                      />
                      {blueberryQuantity} pounds of Rabbiteye Blueberries
                    </div>
                  )}

                  {dragonfruitQuantity === 0 ? (
                    ""
                  ) : (
                    <div className="cart-icon-container">
                      <img
                        src={dragonfruit_icon}
                        alt="orange_icon"
                        className="cart-icon-mini"
                      />
                      {dragonfruitQuantity} pounds of Dragonfruit
                    </div>
                  )}
                </div>
                <p>
                  Your total is $<span>{total}</span>
                </p>

                <p>Thank you for using Neets </p>
                <div id="container">
                  <div id="navi">
                    <img src={fruit_tree_icon} alt="orange_icon" width="90" />
                    <img src={home_icon} alt="orange_icon" width="90" />
                  </div>
                  <div id="infoi">
                    <img
                      src={truck_icon}
                      alt="orange_icon"
                      className="cart-modal-image cart-modal-truck2"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="customer-review-container">
          <div className="customer-review-header">
            <h2>Customer Reviews</h2>
          </div>
          <div className="customer-review-section-center">
            {slidingData.map((slide, slideIndex) => {
              const { id, image, name, title, quote } = slide;
              let position = "nextSlide";
              if (slideIndex === index) {
                position = "activeSlide";
              }
              if (
                slideIndex === index - 1 ||
                (index === 0 && slideIndex === slidingData.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article className={position} key={id}>
                  <div className="customer-review-panel">
                    <div className="customer-review-left">
                      <img src={image} alt={name} className="person-img" />

                      <div className="customer-review-left-info">
                        <h4>{name}</h4>
                        <p>{title}</p>
                      </div>
                    </div>
                    <div className="customer-review-right">
                      <span className="customer-review-right-text">
                        <ImQuotesLeft style={{ margin: "0px 5px" }} />
                        {quote}
                        <ImQuotesRight style={{ margin: "0px 5px" }} />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="carousel-buttons2">
              <button className="prev" onClick={() => setIndex(index - 1)}>
                <FiChevronLeft size={25} />
              </button>
              <button className="next" onClick={() => setIndex(index + 1)}>
                <FiChevronRight size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
