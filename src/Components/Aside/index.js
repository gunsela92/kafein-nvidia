import React, {useEffect, useState} from "react";
import "./aside-filters.sass";
import PropTypes from "prop-types";
import CustomCheckbox from "../CustomCheckbox";
import CloseIcon from "../../assets/svg/cancel-gray.svg";
import FilterIcon from "../../assets/svg/filter.svg";

const AsideFilters = ({games, onChanged}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuActive, setMenuActive] = useState(false);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <aside>
        <h2>Browse Games</h2>
        <div className="filter-area">
          <CustomCheckbox games={games} onChanged={(value, type) => onChanged(value, type)}/>
        </div>
      </aside>
      {width <= 768 && (
        <>
          <div className="mobile-filter-button" onClick={() => setMenuActive(true)}>
            Filter
            <img src={FilterIcon} alt="Filter"/>
          </div>
          {menuActive && (
            <div className="filter-container">
              <div className="mobile-filter-title">
                Browse Games
                <img src={CloseIcon} alt="close" className="close-icon" onClick={() => setMenuActive(false)}/>
              </div>
              <div className="filter-menu">
                <CustomCheckbox games={games} onChanged={(value) => onChanged(value)}/>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AsideFilters;

AsideFilters.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  onChanged: PropTypes.func.isRequired,
};

AsideFilters.defaultProps = {
  games: [],
};
