import React from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const alertFunction = () => {
    const script = document.getElementById("alert");
    script.classList.add("show");
    script.classList.add("showAlert");
    script.classList.remove("hide");
    document.getElementsByClassName("form-input").value = "";

    setTimeout(() => {
      script.classList.remove("show");
      script.classList.add("hide");
    }, 4000);
  };

  const closeAlertFunction = () => {
    const script = document.getElementById("alert");
    script.classList.remove("show");
    script.classList.add("hide");
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ylcbqub",
        "template_hbcy0zw",
        e.target,
        "user_K6uunKwowvHz9O05LiDAK"
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

  return (
    <section className="contact-section">
      <h1>Contact Us!</h1>
      <div className="contact-heading">
        Please reach out to us if you have an questions or need any additional
        information about The Pledge. Our organization is more than happy to
        clarify anything for you!
      </div>
      <div className="form-container">
        <form onSubmit={sendEmail}>
          <div className="contact-row">
            <label htmlFor="" className="form-label">
              Name
              <input
                type="text"
                id="form-input"
                className="form-input"
                name="name"
                Required
              />
            </label>
          </div>
          <div className="contact-row">
            <label htmlFor="" className="form-label">
              Email
              <input
                type="email"
                id="form-input"
                className="form-input"
                name="email"
                Required
              />
            </label>
          </div>
          <div className="contact-row">
            <label for="cars" className="form-label">
              Subject:
              <select name="subject" id="reason-dropdown" className="hi">
                <option value="Interest">Interest in The Pledge</option>
                <option value="Media">Media and Networking</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <div className="contact-row">
            <label htmlFor="" className="form-label">
              Message
              <textarea
                name="message"
                id="form-input"
                className="message-field"
              ></textarea>
            </label>
            <input
              type="submit"
              name=""
              id=""
              className="submit-button"
              onClick={alertFunction}
            />
          </div>
        </form>
      </div>

      <div className="alert hide" id="alert">
        <span className="fas fa-exclamation-circle">
          <FaCheckCircle />
        </span>
        <span className="msg">Success: Your message has been sent!</span>
        <div className="close-btn" onClick={closeAlertFunction}>
          <span className="fas fa-times">
            <FaTimes />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
