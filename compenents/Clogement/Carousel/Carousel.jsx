import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ pictures }) => {
  const [currentPictures, setCurrentPicture] = useState(0);

  useEffect(() => {
    const lastIndex = pictures.length - 1;
    if (currentPictures < 0) {
      setCurrentPicture(lastIndex);
      
    } else if (currentPictures > lastIndex) {
      setCurrentPicture(0);
    }
  }, [currentPictures, pictures]);

  const PrevPictures = () => {
    setCurrentPicture(currentPictures - 1);
  };  

  const NextPictures = () => {
    setCurrentPicture(currentPictures + 1);
  };

  return (
    <div className="carousel">

      <p className="arrow-left" onClick={PrevPictures}>∧</p> 

      <div className="all-images">
        <img src={pictures[currentPictures]} alt={`Slide ${currentPictures + 1}`} />
        <p className="carousel-number">{`${currentPictures + 1} / ${pictures.length}`}</p>
      </div>

      <p className="arrow-right" onClick={NextPictures}>∧</p>
    </div>
  );
};

export default Carousel;
