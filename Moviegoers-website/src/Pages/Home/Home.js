import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Modal from "react-modal";
import movie_reel from "../../Images/movie_reel_icon.png";
import imdb_icon from "../../Images/imdb_icon.jpeg";
import tmdb_icon from "../../Images/movie_db.jpeg";
import ReformatDate from "../../Components/Functions/ReformatDate";
import DisplayProviders from "../../Components/DisplayProviders";
import PercentageColor from "../../Components/Functions/PercentageColor";
import TrailerLinkComponent from "../../Components/TrailerLinkComponent";
import "./Home.css";

// to not get an error on modal
Modal.setAppElement("#root");

// api info
var api_key = "a1a3b916111740ca43e01ffd2d053a1d";
var api_version = 3;
var api_base_url = `https://api.themoviedb.org/${api_version}`;
var poster_link = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";

const Home = () => {
  const [homeTitle, setHomeTitle] = useState("Popular");
  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [activeGenre, setActiveGenre] = useState("");

  // top 20 most popular current movies
  const displayPopularMovies = () => {
    var endpoint_path = "/movie/popular";
    var endpoint = `${api_base_url}${endpoint_path}?api_key=${api_key}&language=en-US`;
    axios.get(endpoint).then((response) => {
      setMovieList(response.data.results);
    });
    setHomeTitle("Popular");
    setActiveCategory("Popular");
    setGenreList([]);
    setActiveGenre("");
  };

  // top 20 trending current movies
  const displayTrendingMovies = () => {
    var endpoint_path = "/trending/movie/week";
    var endpoint = `${api_base_url}${endpoint_path}?api_key=${api_key}&language=en-US`;
    axios.get(endpoint).then((response) => {
      setMovieList(response.data.results);
    });
    setHomeTitle("Trending");
    setActiveCategory("Trending");
    setGenreList([]);
    setActiveGenre("");
  };

  // top 20 most popular movies for selected genre
  const displayGenreMovies = (val) => {
    var genre_id = val.id;
    var endpoint_path = "/discover/movie";
    var query = `&with_genres=${genre_id}`;
    var endpoint = `${api_base_url}${endpoint_path}?api_key=${api_key}${query}&language=en-US`;
    axios.get(endpoint).then((response) => {
      setMovieList(response.data.results);
    });
    setHomeTitle(val.name);
    setActiveGenre(val.name);
  };

  // display genre options
  const displayGenres = () => {
    var endpoint_path = "/genre/movie/list";
    var endpoint = `${api_base_url}${endpoint_path}?api_key=${api_key}&language=en-US`;
    axios.get(endpoint).then((response) => {
      setGenreList(response.data.genres);
    });
    setHomeTitle("Choose a genre!");
    setActiveCategory("Genre");
  };

  useEffect(() => {
    displayPopularMovies();
  }, []);

  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalOverview, setModalOverview] = useState("");
  const [modalReleaseDate, setModalReleaseDate] = useState("");
  const [modalPosterPath, setModalPosterPath] = useState("");
  const [modalDirectorsString, setModalDirectorsString] = useState("");
  const [modalActorsString, setModalActorsString] = useState("");
  const [modalStreamProviders, setModalStreamProviders] = useState([]);
  const [modalBuyProviders, setModalBuyProviders] = useState([]);
  const [modalRentProviders, setModalRentProviders] = useState([]);
  const [modalRuntime, setModalRuntime] = useState("");
  const [modalVoteAverage, setModalVoteAverage] = useState(0);
  const [modalGenreString, setModalGenreString] = useState("");
  const [modalIMDbLink, setModalIMDbLink] = useState("");
  const [modalMovieID, setModalMovieID] = useState("");

  const modalDisplay = (val) => {
    setModalIsOpen(true);
    setModalTitle(val.title);
    setModalOverview(val.overview);
    setModalReleaseDate(val.release_date);
    setModalPosterPath(val.poster_path);

    var movie_id = val.id;
    setModalMovieID(movie_id);
    getAndSetMovieDirector(movie_id);
    getAndSetMovieActors(movie_id);
    getAndSetMovieProviders(movie_id);
    getMovieDetails(movie_id);
  };

  const getAndSetMovieDirector = (movie_id) => {
    var endpoint_path = `/movie/${movie_id}/credits`;
    var endpoint = `${api_base_url}${endpoint_path}?api_key=${api_key}&language=en-US`;
    var directors = "";

    axios.get(endpoint).then((response) => {
      directors = response.data.crew.filter((elem) => {
        if (elem.job === "Director") {
          return elem.job;
        } else {
          return "";
        }
      });

      directors = directors.slice(0, 3);
      var directors_names = "";
      for (var i = 0; i < directors.length; i++) {
        if (i === directors.length - 1) {
          directors_names += directors[i].name;
        } else {
          directors_names += directors[i].name + ", ";
        }
      }

      setModalDirectorsString(directors_names);
    });
  };

  const getAndSetMovieActors = (movie_id) => {
    var endpoint_path = `/movie/${movie_id}/credits`;
    var endpoint = `${api_base_url}${endpoint_path}?api_key=${api_key}&language=en-US`;
    var acting = "";

    axios.get(endpoint).then((response) => {
      acting = response.data.cast.filter((elem) => {
        if (elem.known_for_department === "Acting") {
          return elem.name;
        } else {
          return "";
        }
      });

      acting = acting.slice(0, 3);
      var actor_names = "";
      for (var i = 0; i < acting.length; i++) {
        if (i === acting.length - 1) {
          actor_names += acting[i].name;
        } else {
          actor_names += acting[i].name + ", ";
        }
      }

      setModalActorsString(actor_names);
    });
  };

  const getAndSetMovieProviders = (movie_id) => {
    var endpoint_path = `/movie/${movie_id}/watch/providers`;
    var endpoint = `${api_base_url}${endpoint_path}?api_key=${api_key}&language=en-US`;

    axios.get(endpoint).then((response) => {
      if (response.data.results.US) {
        // stream
        if (response.data.results.US.flatrate !== undefined) {
          setModalStreamProviders(response.data.results.US.flatrate);
        } else {
          setModalStreamProviders([]);
        }

        // rent
        if (response.data.results.US.buy !== undefined) {
          setModalRentProviders(response.data.results.US.buy);
        } else {
          setModalRentProviders([]);
        }

        // buy
        if (response.data.results.US.rent !== undefined) {
          setModalBuyProviders(response.data.results.US.rent);
        } else {
          setModalBuyProviders([]);
        }
      } else {
        setModalStreamProviders([]);
        setModalRentProviders([]);
        setModalBuyProviders([]);
        console.log("not Available in the US!!!");
      }
    });
  };

  // get details (runtime, genres, vote_average (rating), imdb_id)
  const getMovieDetails = (movie_id) => {
    var endpoint_path = `/movie/${movie_id}`;
    var endpoint = `${api_base_url}${endpoint_path}?api_key=${api_key}&language=en-US`;

    axios.get(endpoint).then((response) => {
      setModalVoteAverage(response.data.vote_average * 10);
      setModalIMDbLink(`https://www.imdb.com/title/${response.data.imdb_id}`);

      const makeGenreList = (response) => {
        var genreList = "";
        var newGenre = response.data.genres.map((val, key) => {
          return val.name;
        });
        genreList += newGenre;
        return genreList;
      };

      var res = makeGenreList(response);
      var i = 0;
      while (i < res.length) {
        if (res[i] === ",") {
          res = res.slice(0, i + 1) + " " + res.slice(i + 1);
          i++;
        }
        i++;
      }
      setModalGenreString(res);

      // convert runtime from m to h:m
      const divmod = (x, y) => [Math.floor(x / y), x % y];
      var hoursminutes = divmod(response.data.runtime, 60);
      var stringhm =
        String(hoursminutes[0]) + "h " + String(hoursminutes[1] + "m");
      setModalRuntime(stringhm);
    });
  };

  return (
    <section className="page-container">
      <div className="content-wrap">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          overlayClassName="overlay-modal-styles"
          className="modal-styles"
          closeTimeoutMS={550}
        >
          <span className="modal-close" onClick={() => setModalIsOpen(false)}>
            <FaTimes />
          </span>
          <div className="modal-container">
            <div className="modal-container-left">
              <img src={poster_link + modalPosterPath} alt="movie_poster" />
              <a
                className="external-image-redirect"
                href={poster_link + modalPosterPath}
                target="_blank"
                rel="noreferrer"
                title="View Full Image"
              >
                <FiExternalLink />
              </a>
            </div>
            <div className="modal-container-right">
              <div className="modal-half-container">
                <h1>{modalTitle}</h1>
                <div className="heading-info">
                  <h5>{ReformatDate(modalReleaseDate)}</h5>
                  <img src={movie_reel} alt="" width="14px" height="14px" />
                  <h5>{modalRuntime}</h5>
                  <img src={movie_reel} alt="" width="14px" height="14px" />
                  <h5>{modalGenreString}</h5>
                </div>
                <hr />
              </div>

              <div className="percent-trailer">
                <span className="trailer-item">
                  <span
                    className="trailer-button"
                    style={{ color: PercentageColor(modalVoteAverage) }}
                    title="Avg. Score"
                  >
                    {modalVoteAverage}%
                  </span>
                  <span className="trailer-caption" title="Avg. Score">
                    <h4>Avg. Score (TMDb users)</h4>
                  </span>
                </span>
                <span className="trailer-item more-down">
                  <TrailerLinkComponent
                    api_key={api_key}
                    api_version={api_version}
                    movie_id={modalMovieID}
                  />
                </span>
              </div>

              <p>{modalOverview}</p>
            </div>
          </div>

          <div className="modal-add-info">
            <div className="modal-info-container">
              <div className="more-info-container">
                <h3>More Info</h3>
                <div>
                  Directed by:&nbsp;
                  {modalDirectorsString}
                </div>
                <div>
                  Starring:&nbsp;
                  {modalActorsString}
                </div>
                <h4>Additional info at...</h4>
                <a
                  href={`https://www.themoviedb.org/movie/${modalMovieID}`}
                  target="_blank"
                  rel="noreferrer"
                  title="The Movie Database (TMDb)"
                >
                  <img src={tmdb_icon} alt="tmdb" height="95px" width="95px" />
                </a>
                <a
                  href={modalIMDbLink}
                  target="_blank"
                  rel="noreferrer"
                  title="IMDB "
                >
                  <img src={imdb_icon} alt="imdb" height="50px" width="95px" />
                </a>
              </div>
            </div>

            <div className="modal-info-container">
              <DisplayProviders
                type="Stream"
                modalStreamProviders={modalStreamProviders}
                modalMovieID={modalMovieID}
                key="Stream"
              />
            </div>
            <div className="modal-info-container">
              <DisplayProviders
                type="Buy"
                modalStreamProviders={modalBuyProviders}
                modalMovieID={modalMovieID}
                key="Buy"
              />
            </div>
            <div className="modal-info-container">
              <DisplayProviders
                type="Rent"
                modalStreamProviders={modalRentProviders}
                modalMovieID={modalMovieID}
                key="Rent"
              />
            </div>
          </div>
        </Modal>
        <div className="categories-container">
          <ul className="categories-list">
            <li
              className={
                activeCategory === "Popular" ? "button active-button" : "button"
              }
              onClick={displayPopularMovies}
              title="Popular"
            >
              Popular
            </li>
            <li
              className={
                activeCategory === "Trending"
                  ? "button active-button"
                  : "button"
              }
              onClick={displayTrendingMovies}
              title="Trending"
            >
              Trending
            </li>
            <li
              className={
                activeCategory === "Genre" ? "button active-button" : "button"
              }
              onClick={displayGenres}
              title="Genre"
            >
              Genre
            </li>
          </ul>
          <div className="genre-container">
            {genreList.map((val, key) => {
              return (
                <div
                  className={
                    activeGenre === val.name
                      ? "genre-option active-option "
                      : "genre-option "
                  }
                  onClick={() => displayGenreMovies(val)}
                  key={key}
                  title={val.name}
                >
                  {val.name}
                </div>
              );
            })}
          </div>

          <x-sign>
            <h1>{homeTitle}</h1>
          </x-sign>
        </div>

        <div className="home-container">
          {movieList.map((val, key) => {
            return (
              <div
                className="movie-tile"
                key={key}
                onClick={() => modalDisplay(val)}
              >
                <img src={poster_link + val.poster_path} alt="" />
                <h3>{val.title}</h3>

                <h4 className="movie-tile-date">
                  {ReformatDate(val.release_date)}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
