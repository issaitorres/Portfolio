import React from "react";
import Footer from "../../Components/Footer/Footer";
import moviedb from "../../Images/movie_db.jpeg";
import "./How_It_Works.css";

function How_It_works() {
  return (
    <section className="page-container">
      <div className="content-wrap">
        <div className="how-container">
          <h1>How It Works</h1>
          <div className="how-info">
            <img src={moviedb} alt="movie-db" />
            <div className="how-info-segment">
              <p>
                The secret to our always up-to-date movie catalog is The Movie
                Database which contains every single movie since the beginning
                of time. Moviegoers communicates with the API of The Movie DB to
                get all the information we need to help guide our users with
                their decision making. Go check it out!
              </p>
              <a
                href="https://www.themoviedb.org/?language=en-US"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button movie-db-button">
                  The Movie Database
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default How_It_works;
