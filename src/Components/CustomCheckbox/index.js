import React, {useEffect, useState} from "react";
import "./checkbox.sass";
import PropTypes from "prop-types";
import Arrow from "../../assets/svg/select-arrow.svg";

const translatedValues = {"AVAILABLE": "Available", "MAINTENANCE": "Maintenance", "PATCHING": "Patching"};

const CustomCheckbox = ({games, onChanged}) => {
  const [options, setOptions] = useState([]);
  const [gameStateOptions, setGameStateOptions] = useState([]);
  const [visibleOptions, setVisibleOptions] = useState({statusMenu: true, typeMenu: true});

  useEffect(() => {
    if (games?.length > 0) {
      const tags = games?.reduce((acc, curr) => [...acc, curr?.genres], [])?.reduce((acc, curr) => [...acc, ...curr], []);
      const gameStates = games?.reduce((acc, curr) => [...acc, translatedValues[curr?.status]], []);
      setOptions([... new Set(tags)]);
      setGameStateOptions([... new Set(gameStates)]);
    }
  }, [games]);

  const switchMenuState = (menuName) => {
    if (menuName === "gameStatus") {
      setVisibleOptions({...visibleOptions, statusMenu: !visibleOptions.statusMenu});
    } else {
      setVisibleOptions({...visibleOptions, typeMenu: !visibleOptions.typeMenu});
    }
  }

  return (
    <>
      <div className={`filterMenu-titles ${visibleOptions?.statusMenu ? "active" : ""}`} onClick={() => switchMenuState("gameStatus")}>
        <span className="title">
          State
          <img src={Arrow} alt="arrow" className={`arrow ${visibleOptions?.statusMenu ? "active" : ""}`} />
        </span>
        {gameStateOptions?.length > 0 && gameStateOptions?.map((option,index) => (
          <label className="checkbox" key={index}>
            <input type="checkbox" className="checkbox-input" name={option} value={option} defaultChecked={false} onChange={() => onChanged(option, "gameStatus")} />
            <span className="checkbox__label">
              {option}
            </span>
          </label>
        ))}
      </div>
      <div className={`filterMenu-titles ${visibleOptions?.typeMenu ? "active" : ""}`} onClick={() => switchMenuState()}>
        <span className="title">
          Genre Filters
          <img src={Arrow} alt="arrow" className={`arrow ${visibleOptions?.typeMenu ? "active" : ""}`} />
        </span>
        {options?.length > 0 && options?.map((option, index) => (
          <label className="checkbox" key={index}>
            <input type="checkbox" className="checkbox-input" name={option} value={option} onChange={() => onChanged(option)} defaultChecked={false} />
            <span className="checkbox__label">
              {option}
            </span>
          </label>
        ))}
      </div>
    </>
  );
};

export default CustomCheckbox;

CustomCheckbox.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  onChanged: PropTypes.func.isRequired,
};

CustomCheckbox.defaultProps = {
  games: [],
};