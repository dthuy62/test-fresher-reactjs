import React, { useEffect, useState } from "react";
import { Animal, AnimalData, getAnimalsAPI, getMockAnimals } from "../../../../api/animals";
import Banner from "../../../../components/Banner";
import Loading from "../../../../components/Loading";
import { Images } from "../../../../constants/images";
import { AnimalSampleList } from "../../../../utils/data";
import AnimalCard from "../../components/AnimalCard";
import "./MainPage.scss";

const MainPage = () => {
  const [animalList, setAnimalList] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  console.log(animalList);
  

  useEffect(() => {
    // console.log('re-render');

    const handleGetAnimals = async () => {
      setLoading(true)
      try {
        const animals = await getAnimalsAPI();
        setAnimalList(animals.data.animals);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    handleGetAnimals();
  }, []);
  return (
    <>
     {
      loading ? ( <Loading /> ) : (<div className="animal-main-page">
      <Banner bgUrl={Images.BG_BANNER_ANIMAL} />
      <div className="animal-categories"></div>
      <div className="animal-main-page__list">
        <div className="header-title">
          <div className="header-title__text">Our picks for you</div>
          <div className="header-title__btn">View all</div>
        </div>
        <div className="animal-main-page__list-container">
          {animalList.map((animal: Animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </div>)
    }
    </>
   
    
  );
};

export default MainPage;
