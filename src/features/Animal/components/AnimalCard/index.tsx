import React from "react";
import { Animal } from "../../../../api/animals";
import { Images } from "../../../../constants/images";
import "./AnimalCard.scss";
interface AnimalProp {
  animal: Animal;
}

const AnimalCard = ({ animal }: AnimalProp) => {
  const { photos, gender, name, age, contact } = animal;
  console.log(animal);
  
  // const { image, gender, type, age, contact } = animal;

  return (
    <div className="animal-item">
      <div className="animal-item__thumbnail">
        <img src={photos.length ? photos[0].medium : Images.IMG_NOTFOUND} alt="" />
      </div>
      <div className="animal-item__content">
        <div className="animal-age">
          <span className="gender">{gender}, </span>
          <span className="apge">{age}</span>
        </div>
        <div className="animal-name">
          <h2>{name.length > 12 ? `${name.slice(0, 12)}...` : name }</h2>
        </div>
        <div className="animal-contact">
          <span>{contact.address.city}, </span>
          <span>{contact.address.country}, </span>
          <span>{contact.address.state}</span>
        </div>
      </div>
    </div>

    // <div className="animal-item">
    //   <div className="animal-item__container">
    //     <div className="animal-item__thumbnail">
    //       <img src={image ? image : Images.IMG_NOTFOUND} alt="" />
    //     </div>
    //     <div className="animal-item__content">
    //       <div className="animal-age">
    //         <span className="gender">{gender}, </span>
    //         <span className="apge">{age}</span>
    //       </div>
    //       <div className="animal-name">
    //         <h2>{type}</h2>
    //       </div>
    //       <div className="animal-contact">
    //         <span>{contact}, </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AnimalCard;
