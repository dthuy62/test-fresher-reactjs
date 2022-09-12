import React, { useState } from "react";
import Button from "../../../../components/Button";
import { Images } from "../../../../constants/images";
import "./Feedback.scss";

interface FeedbackProps {
  item: {
    id: number;
    image: string;
    desc: string;
    username: string;
  };
}

const Feedback = ({ item }: FeedbackProps) => {
  const { id, image, desc, username } = item;

  const [save, setSave] = useState(false);
  console.log(save);
  
  const handleSaveFeedback = (id: number) => {
    setSave(prev => !prev)
  };

  return (
    <div className={`feedback-item item--${id}`}>
      <div className="btn-save" onClick={() => handleSaveFeedback(id)}>
        <Button content={save ? 'Unsave' : 'Save'} icon={save ? Images.IC_HEART : Images.IC_UN_HEART} />
      </div>
      <img
        className="thumbnail"
        src={require(`../../../../assets/images/${image}`)}
        alt=""
      />
      {/* <div className="content">content</div> */}
    </div>
  );
};

export default Feedback;
