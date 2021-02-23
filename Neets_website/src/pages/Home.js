import React from "react";
import Tile from "../tile";
import { homeData } from "../data";

const Home = () => {
  return (
    <main>
      <div className="home-introduction-container">
        <div className="home-introduction-text-container">
          <h1>NEETS</h1>
          <h3>Where Nature's Sweets are brought to your street!</h3>
        </div>
      </div>

      {homeData.map((tile) => {
        const { id, title, slogan, links, image, bordercolor } = tile;
        return (
          <div className="section" key={id}>
            <Tile
              key={id}
              title={title}
              slogan={slogan}
              links={links}
              image={image}
              bordercolor={bordercolor}
            />
          </div>
        );
      })}
    </main>
  );
};

export default Home;
