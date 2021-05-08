import React, { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
import { FaTimes } from "react-icons/fa";
import Axios from "axios";
import "./Home.css";

const Home = () => {
  const [activateModalName, setActivateModalName] = useState("");
  const [activateModalMessage, setActivateModalMessage] = useState("");
  const [activateModalImage, setActivateModalImage] = useState("");
  const [pledgeList, setPledgeList] = useState([]);
  const [currentPledgeID, setCurrentPledgeID] = useState(0);

  const activateModal = (id) => {
    setCurrentPledgeID(id);
    var modal = document.getElementById("information-modal");
    var span = document.getElementsByClassName("close")[0];
    setActivateModalName(pledgeList[id].name);
    setActivateModalMessage(pledgeList[id].message);
    setActivateModalImage(pledgeList[id].image);
    setCurrentPledgeID(id);

    span.onclick = function () {
      modal.style.display = "none";
    };

    var counter = 0;
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        console.log("click outside");
      } else {
        if (counter === 0) {
          counter++;
          modal.style.display = "block";
          console.log("clicked inside");
        }
      }
    };
  };

  const activateCreationModal = (e) => {
    var modal = document.getElementById("CreationModal");
    var span = document.getElementsByClassName("creation-close")[0];

    span.onclick = function () {
      modal.style.display = "none";
      checkerFunc();
    };

    var counter = 0;
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        checkerFunc();
        document.getElementById("createImage").value = "";
        document.getElementById("createName").value = "";
        document.getElementById("createMessage").value = "";
      } else {
        if (counter === 0) {
          counter++;
          modal.style.display = "block";
        }
      }
    };
  };

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [imagePath, setImagePath] = useState([]);
  const [checker, setChecker] = useState(false);
  const checkerFunc = () => {
    setChecker(false);
  };

  const trueCheckerFunc = () => {
    setChecker(true);
  };

  const addPledge = () => {
    trueCheckerFunc();
    const formData = new FormData();
    formData.append("file", imagePath[0]);
    formData.append("upload_preset", "aahvghbp");
    Axios.post(
      `https://api.cloudinary.com/v1_1/the-pledge-organization/image/upload`,
      formData
    ).then((response) => {
      const fileName = response.data.public_id;

      Axios.post("http://localhost:3001/create", {
        name: name,
        message: message,
        imagePath: fileName,
      }).then(() => {
        console.log("success!!");
      });

      setTimeout(() => {
        window.location.reload();
      }, 1250);
    });

    setName("");
    setMessage("");
    setImagePath([]);
  };

  const getPledges = () => {
    Axios.get("http://localhost:3001/pledges").then((response) => {
      setPledgeList(response.data);
    });
  };

  const deletePledge = (id) => {
    var modal = document.getElementById("information-modal");

    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setPledgeList(
        pledgeList.filter((val) => {
          return val.id != id;
        })
      );
    });
    modal.style.display = "none";
  };

  const [updateToggle, setUpdateToggle] = useState(false);

  const updatePledge = (id) => {
    trueCheckerFunc();
    const formData = new FormData();
    formData.append("file", imagePath[0]);
    formData.append("upload_preset", "aahvghbp");
    Axios.post(
      `https://api.cloudinary.com/v1_1/the-pledge-organization/image/upload`,
      formData
    ).then((response) => {
      const fileName = response.data.public_id;

      Axios.put("http://localhost:3001/update", {
        name: name,
        message: message,
        imagePath: fileName,
        id: id,
      }).then(() => {
        console.log("success!!");
      });

      setTimeout(() => {
        window.location.reload();
      }, 1250);
    });

    setName("");
    setMessage("");
    setImagePath([]);
  };

  useEffect(() => {
    getPledges();
  }, []);

  return (
    <main className="main">
      <div className="home-section">
        <div className="heroImage">
          <div className="heroContents">
            <h1>The Pledge</h1>
            <h3>"Do good and good will come to you."</h3>
          </div>
        </div>

        <div className="pledge-creator-container">
          <button className="submit-button" onClick={activateCreationModal}>
            Create Pledge
          </button>
          <h2 className="our-pledge-title">Our Pledges</h2>
        </div>

        <div className="pledge-container">
          {pledgeList.map((val, key) => {
            return (
              <div>
                <div
                  className="pledge-icon-hover"
                  onClick={() => {
                    activateModal(key);
                  }}
                  id={key}
                >
                  <div className="pledge">
                    <div className="Image">
                      <Image
                        cloudName="the-pledge-organization"
                        publicId={val.image}
                      >
                        <Transformation
                          width="200"
                          height="200"
                          gravity="face"
                          crop="thumb"
                        />
                      </Image>
                    </div>

                    <div className="caption">{val.name}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div id="CreationModal" className="modal">
          <div className="modal-content">
            <span className="creation-close">
              <FaTimes />
            </span>

            <div className="modal-container">
              <h2>Create your pledge today!</h2>
              <p>Creating your pledge will be the highest honor</p>
              <div class="grid-container">
                <div class="grid-item">
                  <label htmlFor="">Image</label>
                </div>
                <div class="grid-item">
                  <input
                    type="file"
                    name="img"
                    id="createImage"
                    accept="image/*"
                    onChange={(e) => setImagePath(e.target.files)}
                    required
                  />
                </div>
                <div class="grid-item">
                  <label htmlFor="">Name</label>
                </div>
                <div class="grid-item">
                  <input
                    type="text"
                    id="createName"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    required
                  />
                </div>
                <div class="grid-item">
                  <label htmlFor="">Message</label>
                </div>
                <div class="grid-item">
                  <textarea
                    name="message"
                    id="createMessage"
                    className="message-field"
                    onChange={(event) => {
                      setMessage(event.target.value);
                    }}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="modal-row">
                <input
                  type="submit"
                  name=""
                  id=""
                  className="submit-button"
                  onClick={addPledge}
                />
              </div>
              <div className="check-container">
                <svg
                  className={checker ? "checkmark" : "no_checkmark"}
                  id="check-component-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    className={checker ? "checkmark__circle" : ""}
                    id="check-component-2"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    class="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div id="information-modal" className="modal">
          <div className="modal-content">
            <span className="close">
              <FaTimes />
            </span>

            <div className="modal-container">
              <h2>{activateModalName}</h2>
              <div className="Image">
                <Image
                  cloudName="the-pledge-organization"
                  publicId={activateModalImage}
                >
                  <Transformation
                    width="200"
                    height="200"
                    gravity="face"
                    crop="thumb"
                  />
                </Image>
              </div>
              <h3>{activateModalMessage}</h3>

              <div className="edit-section">
                <hr className="underline" />
                <h4>
                  Please only update and delete this pledge if it belongs to
                  you!
                </h4>
                <div>
                  <button
                    className="submit-button update"
                    onClick={() => {
                      setUpdateToggle(!updateToggle);
                    }}
                  >
                    {updateToggle ? <div>Minimize</div> : <div>Update</div>}
                    {/* Update */}
                  </button>
                  {updateToggle ? (
                    <>
                      <div class="grid-container">
                        <div class="grid-item">
                          <label htmlFor="">New&nbsp;Image</label>
                        </div>
                        <div class="grid-item">
                          <input
                            type="file"
                            name="img"
                            id="createImage"
                            accept="image/*"
                            onChange={(e) => setImagePath(e.target.files)}
                            required
                          />
                        </div>
                        <div class="grid-item">
                          <label htmlFor="">New&nbsp;Name</label>
                        </div>
                        <div class="grid-item">
                          <input
                            type="text"
                            id="createName"
                            onChange={(event) => {
                              setName(event.target.value);
                            }}
                            required
                          />
                        </div>
                        <div class="grid-item">
                          <label htmlFor="">New&nbsp;Message</label>
                        </div>
                        <div class="grid-item">
                          <textarea
                            name="message"
                            id="createMessage"
                            className="message-field"
                            onChange={(event) => {
                              setMessage(event.target.value);
                            }}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="modal-row">
                        <input
                          type="submit"
                          name=""
                          id=""
                          className="submit-button"
                          onClick={() => {
                            updatePledge(pledgeList[currentPledgeID].id);
                          }}
                        />
                      </div>
                      <div className="check-container">
                        <svg
                          className={checker ? "checkmark" : "no_checkmark"}
                          id="check-component-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 52 52"
                        >
                          <circle
                            className={checker ? "checkmark__circle" : ""}
                            id="check-component-2"
                            cx="26"
                            cy="26"
                            r="25"
                            fill="none"
                          />
                          <path
                            class="checkmark__check"
                            fill="none"
                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                          />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div>
                  <button
                    className="submit-button delete"
                    onClick={() => {
                      deletePledge(pledgeList[currentPledgeID].id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
