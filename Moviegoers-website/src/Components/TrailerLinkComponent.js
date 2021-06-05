import React from "react";
import axios from "axios";
import { FaPlayCircle } from "react-icons/fa";

export default class TrailerLinkComponent extends React.Component {
  state = {
    youtube_code: "",
  };

  componentDidMount() {
    var api_base_url = `https://api.themoviedb.org/${this.props.api_version}`;
    var endpoint_path = `/movie/${this.props.movie_id}/videos`;
    var endpoint = `${api_base_url}${endpoint_path}?api_key=${this.props.api_key}&language=en-US`;

    axios.get(endpoint).then((res) => {
      const findTrailer = (example) => {
        var videoInfo = example.filter((elem) => {
          return elem.type === "Trailer";
        });
        return videoInfo;
      };

      if (res.data.results.length === 0) {
        console.log("NO_TRAILER");
      } else {
        var typeTrailer = findTrailer(res.data.results);
        if (typeTrailer.length !== 0) {
          this.setState({ youtube_code: findTrailer(res.data.results)[0].key });
        } else {
          console.log("NO_TRAILER");
        }
      }
    });
  }

  render() {
    var youtube_link = "https://www.youtube.com/watch?v=";

    return (
      <>
        {this.state.youtube_code.length !== 0 ? (
          <a
            href={`${youtube_link}${this.state.youtube_code}`}
            target="_blank"
            rel="noreferrer"
            title="View Trailer"
            className="trailer-button-link"
          >
            <div className="trailer-item">
              <h1>
                <FaPlayCircle className="trailer-button" />
              </h1>
              <span className="trailer-caption">
                <h4>View Trailer</h4>
              </span>
            </div>
          </a>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}
