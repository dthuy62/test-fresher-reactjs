import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../constants/images";
import { RouteList } from "../../constants/routes";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-logo">
          <div className="img-logo">
            <img src={Images.MAIN_LOGO} alt="main-logo" />
          </div>
          <div className="name-logo">Pet Finder</div>
          <div className="text-slogan">let's find your pet!</div>
        </div>
        <div className="header__container-navbar">
          <div className="navbar-container">
            <div className="navbar-container__item nav">
              <div className="nav__item"><Link to={RouteList.home}>About</Link></div>
              <div className="nav__item"><Link to={RouteList.home}>Contact</Link></div>
            </div>
            <div className="navbar-container__item pets-favorite">
              <div className="heart-icon">
                <img src={Images.IC_HEART} alt="icon-heart" />  
              </div>
              <span>03 hearts</span>
            </div>
            <div className="navbar-container__item auth"><Link to={RouteList.login}>Login</Link></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
