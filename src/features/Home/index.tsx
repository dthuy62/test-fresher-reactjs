import React from "react";
import Banner from "../../components/Banner";
import { Images } from "../../constants/images";
import { feedbackList } from "../../utils/data";
import Feedback from "./components/Feedback";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home-page">
      <Banner bgUrl={Images.BG_BANNER_HOME} />

      <div className="home-page__feedback-list">
        <div className="list-title">Feedback's customer</div>
        <div className="list-container">
        {feedbackList.map((feedback) => (
          <Feedback key={feedback.id} item={feedback} />
        ))}
        </div>
       
      </div>
    </div>
  );
};

export default Home;
