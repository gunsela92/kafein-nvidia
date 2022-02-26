import React from "react";
import "./game-content.sass";

const GameContent = ({games}) => {

  return (
    <section className="games-content">
      <div className="game-card">
        {games?.map(e => (
          <div className="card-content" key={e?.id}>
            <div className="game-titles">
              <span className="polygon-title">{e?.title?.charAt(0)}</span>
              <span className="game-name">{e?.title}</span>
            </div>
            <div className="game-desc">
              <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
              </span>
              <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameContent;