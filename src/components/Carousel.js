import React, { useState } from 'react';

const Carousel = () => {
  const images = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]; 

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    // Decrementa el índice de la imagen actual para mostrar la imagen anterior
    if(currentImageIndex >0 ){
      setCurrentImageIndex(currentImageIndex-1);
    }

  };

  const handleNextClick = () => {
    // Incrementa el índice de la imagen actual para mostrar la siguiente imagen
    if( (currentImageIndex+1) < images.length ){
      setCurrentImageIndex(currentImageIndex+1);
    }
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick}>Left</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} /> 
      <button onClick={handleNextClick}>Right</button>
    </div>
  );
};

export default Carousel;
