import React, {useEffect, useState} from "react";
import Logo from "../../assets/images/logo.png"
import "./header.sass";
import menuList from "../../configs/menu-config";
import MenuIcon from "../../assets/svg/menu.svg";
import CloseIcon from "../../assets/svg/cancel.svg";

const Header = () => {
  const [activeUrl, setActiveUrl] = useState(0);
  const [menuActive, setMenuActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => { // Window genisligi icin event listener
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => { // Window 1100 pxden buyukse mobile menu kapanir
    width > 1100 && setMenuActive(false)
  }, [width]);


  return (
    <header>
      <img className="logo" alt="logo" src={Logo}/>
      <div className="menu-container">
        {menuList?.map((e, index) => (
          <div className={`menu-item${activeUrl === index ? " active" : ""}`} key={e.id}
            onClick={() => setActiveUrl(e?.id)}>
            {e.name}
          </div>
        ))}
        <button>LET&apos;S PLAY</button>
      </div>
      <img src={!menuActive ? MenuIcon : CloseIcon} alt="menu" className="menu-icon" onClick={() => setMenuActive(!menuActive)}/>
      {width <= 1100 && menuActive && (
        <div className="menu-list">
          {menuList?.map((e, index) => (
            <div className={`menu-item${activeUrl === index ? " active" : ""}`} key={e.id}
              onClick={() => setActiveUrl(e?.id)}>
              <span>{e.name}</span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
