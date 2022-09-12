import React from "react";
import { Images } from "../../constants/images";
import "./Banner.scss";

interface BannerProps {
  bgUrl: string;
}

const Banner = ({ bgUrl }: BannerProps) => {
  return (
    <div className="banner">
      <img className="banner__bg" src={bgUrl} alt="bg-banner" />
      <div className="banner__container">
        <div className="banner__container-searchbar">
          <form className="form-searchbar">
            <div className="content left">
              <div className="form-searchbar__icon">
                <img src={Images.IC_SEARCH} alt="icon-search" />
              </div>
              <div className="form-searchbar__input">
                <input type="text" placeholder="What are you searching for?" />
              </div>
            </div>
            <div className="content right">
              <div className="form-searchbar__options">
                <select>
                  <option value="">All pet</option>
                  <option value="">Dog</option>
                  <option value="">Dog</option>
                  <option value="">Dog</option>
                  <option value="">Dog</option>
                </select>
              </div>
              <div className="form-searchbar__btn">
                <button>Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
