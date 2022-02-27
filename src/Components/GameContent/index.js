import React from "react";
import "./game-content.sass";

const GameContent = ({games}) => {

  return (
    <section className="games-content">
      <div className="game-card">
        {games?.map(game => (
          <div className="card-content" key={game?.id}>
            <div className="game-titles">
              <span className="polygon-title">{game?.title?.charAt(0)}</span>
              <span className="game-name">{game?.title}</span> {/*Normalde tasarimda bu alan yok ancak siralamanin belirgin olmasi acisinden ekledim*/}
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