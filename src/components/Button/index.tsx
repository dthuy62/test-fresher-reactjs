import React from "react";
import { Images } from "../../constants/images";
import "./Button.scss";

interface ButtonProps {
    content: string;
    icon: string;
}

const Button = ({ content, icon }: ButtonProps) => {
  return (
    <>
      <div className="heart-icon">
        <img src={icon} alt="icon-heart" />
      </div>
      <span>{content}</span>
    </>
  );
};

export default Button;
