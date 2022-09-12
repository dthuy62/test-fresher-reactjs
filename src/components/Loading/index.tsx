import React from "react";
import { Images } from "../../constants/images";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-content">
        <img src={Images.LOADING} alt="" />
      </div>
    </div>
  );
};

export default Loading;
