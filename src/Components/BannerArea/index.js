import React, {useEffect, useState} from "react";
import "./banner-area.sass";
import SearchIcon from "../../assets/svg/search.svg";
import CancelIcon from "../../assets/svg/cancel.svg";
import PropTypes from "prop-types";

const BannerArea = ({games, onSearch}) => {
  const [searchValue, setSearchValue] = useState("");
  const [foundResults, setFoundResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (value) => {
    setSearchValue(value);
    const res = games?.filter(game => game?.title?.toLowerCase()?.startsWith(value?.toLowerCase()));
    setShowResults(true);
    setFoundResults(res);
  };

  const handleSelect = (value) => {
    setFoundResults([]);
    setShowResults(false);
    setSearchValue(value);
    onSearch(value);
  };

  useEffect(() => {
    if (searchValue) {
      !showResults && setShowResults(true);
    } else {
      setFoundResults([]);
    }
  }, [searchValue]);

  const clearResults = () => {
    setFoundResults([]);
    setShowResults(false);
    setSearchValue("")
    onSearch("");
  };

  return (
    <div className="banner-area">
      <h1>Lorem ipsum dolor sit amet consectetur</h1>
      <span>
          With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!
      </span>
      <div className="search-area">
        <img src={SearchIcon} alt="search icon" className="search-icon"/>
        <input type="text" placeholder="Search Games" value={searchValue}
          onChange={(e) => handleSearch(e?.target?.value)}/>
        {searchValue &&
        <img src={CancelIcon} alt="Cancel" className="cancel-icon" onClick={clearResults}/>}
        {foundResults?.length > 0 && showResults && (
          <div className="search-results">
            {foundResults?.map((game, index) => (
              <span key={index} className="result-item" onClick={() => handleSelect(game?.title)}>{game?.title}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerArea;

BannerArea.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  onSearch: PropTypes.func.isRequired
};
