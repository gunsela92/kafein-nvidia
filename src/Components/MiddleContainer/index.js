import React, {useCallback, useEffect, useState} from "react";
import "./middle-container.sass";
import CustomSelect from "../SelectBox";
import GameContent from "../GameContent";
import AsideFilters from "../Aside";
import PropTypes from "prop-types";

const MiddleContainer = ({games, searchValue}) => {
  const [sortValue, setSortValue] = useState("A-Z");
  const [processedGameList, setProcessedGameList] = useState([]);
  const [filterValues, setFilterValues] = useState([]);
  const [gameStatusFilters, setGameStatusFilters] = useState([]);

  useEffect(() => {
    if (games?.length > 0) {
      sortData(games)
    }
  }, [sortValue, games])

  useEffect(() => {
    if (searchValue?.length > 0) {
      let res = processedGameList?.filter(game => game?.title?.toLowerCase() === searchValue?.toLowerCase())
      setProcessedGameList(res);
    } else {
      sortData(games);
    }
  }, [searchValue]);

  const sortData = useCallback((games) => {
    const res = games?.sort((a, b) => {
      if (sortValue === "A-Z") {
        return a?.title?.localeCompare(b?.title);
      } else {
        return b?.title?.localeCompare(a?.title);
      }
    });
    filterData([...res]);
  }, [sortValue]);

  const filterData = (games, filterType) => {
    let result = [];
    if (filterType && filterType !== "" && gameStatusFilters?.length > 0) {
      gameStatusFilters?.map(filter => {
        result = games?.filter(game => game?.status?.toLowerCase() === filter?.toLowerCase());
      })
    } else {
      result = games;
    }
    if (result?.length > 0 && filterValues?.length > 0) {
      result = result?.filter(game => {
        return game?.genres?.filter(genre => filterValues?.includes(genre))?.length > 0 ? game : null
      });
    }
    setProcessedGameList(result);
  };

  useEffect(() => {
    filterData(games);
  }, [filterValues]);

  useEffect(() => {
    filterData(games, "gameStatus");
  }, [gameStatusFilters]);

  const handleSort = (value) => {
    setSortValue(value);
  }

  const handleCheckbox = (value, type) => {
    if (type === "gameStatus") {
      if (gameStatusFilters?.includes(value)) {
        setGameStatusFilters(gameStatusFilters?.filter(item => item !== value));
      } else {
        setGameStatusFilters([...gameStatusFilters, value]);
      }
    } else {
      if (filterValues?.includes(value)) {
        setFilterValues(filterValues.filter(item => item?.toLowerCase() !== value?.toLowerCase()));
      } else {
        setFilterValues([...filterValues, value]);
      }
    }
  }

  return (
    <div className="middle-container">
      <section className="aside-filters">
        <AsideFilters games={games} onChanged={(value, type) => handleCheckbox(value, type)}/>
      </section>
      <section className="content">
        <CustomSelect onSelectValue={handleSort} sortValue={sortValue}/>
        <GameContent games={processedGameList}/>
      </section>
    </div>
  );
};

export default MiddleContainer;

MiddleContainer.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  searchValue: PropTypes.string
};