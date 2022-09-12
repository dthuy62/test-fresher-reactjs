import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Images } from "../../constants/images";
import { RouteList } from "../../constants/routes";
import Button from "../Button";
import "./Header.scss";
const Header = () => {
  const user = localStorage.getItem("user");

  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();

  const handleOpenDropwdown = () => {
    setOpenDropdown((prev) => !prev);
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate(RouteList.login)
    
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-logo">
          <div className="img-logo">
            <img src={Images.MAIN_LOGO} alt="main-logo" />
          </div>
          <div className="name-logo">
            <Link to={RouteList.home}>Pet Finder</Link>
          </div>
          <div className="text-slogan">let's find your pet!</div>
        </div>
        <div className="header__container-navbar">
          <div className="navbar-container">
            <div className="navbar-container__item nav">
              <div className="nav__item">
                <Link to={RouteList.home}>About</Link>
              </div>
              <div className="nav__item">
                <Link to={RouteList.animals}>Animals</Link>
              </div>
            </div>
            <div className="navbar-container__item pets-favorite">
              <Button content={`03 hearts`} icon={Images.IC_HEART} />
            </div>
            {user ? (
              <div className="navbar-container__item authed">
                <div className="authed-container">
                <span className="authed-username" onClick={handleOpenDropwdown}>
                  {user}
                </span>
                <span className="authed-chevron-down"></span>
                </div>
               
                <div
                  className="dropdown-logout"
                  style={
                    openDropdown ? { display: "block" } : { display: "none" }
                  }
                  onClick={handleLogout}
                >
                  logout
                </div>
              </div>
            ) : (
              <div className="navbar-container__item auth">
                <Link to={RouteList.login}>Login</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
