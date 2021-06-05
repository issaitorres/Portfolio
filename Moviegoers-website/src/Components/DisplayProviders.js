import React from "react";

function DisplayProviders({ type, modalStreamProviders, modalMovieID }) {
  return (
    <>
      {modalStreamProviders.length === 0 ? (
        <div></div>
      ) : (
        <div id={type}>
          <h4>{type}</h4>
          <div className="provider-container" id={type}>
            {modalStreamProviders.map((val, key) => {
              return (
                <div className="provider" key={key}>
                  <a
                    href={`https://www.themoviedb.org/movie/${modalMovieID}/watch`}
                    target="_blank"
                    rel="noreferrer"
                    title={val.provider_name}
                  >
                    <img
                      src={`https://www.themoviedb.org/t/p/original/${val.logo_path}`}
                      alt=""
                      width="50px"
                      height="50px"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default DisplayProviders;
