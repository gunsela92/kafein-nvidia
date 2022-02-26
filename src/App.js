import React, {useEffect, useState} from "react";
import "./App.sass";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BannerArea from "./Components/BannerArea";
import MiddleContainer from "./Components/MiddleContainer";
import axios from "axios";

function App() {
  const [games, setGames] = useState([]);
  const [searchValues, setSearchValues] = useState("");

  const fetchGames = async () => {
    try {
      const res = await axios.get("https://thingproxy.freeboard.io/fetch/https://gameplus.com.tr/gaming-api/games/list");
      const data = res?.data?.data?.slice(0, 100); // ilk 100 oyunu aldim pagination yapmadigim icin
      setGames(data);
    } catch (e) {
      return e
    }
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <BannerArea games={games} onSearch={(value) => setSearchValues(value)}/>
      <MiddleContainer games={games} searchValue={searchValues}/>
      <Footer />
    </div>
  );
}

export default App;
