import React, { useState } from 'react';

const LikeButton = () => {
  
  const [likes, setLikes] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);


  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  
  const handleLikeClick = () => {

    setLikes(likes + 1);

    // Cambiar el color de fondo al siguiente color en el array
  
     setCurrentColorIndex(currentColorIndex+1)
     if (currentColorIndex === 6) {
      setCurrentColorIndex(0) 
    }
  };

  return (
    <div>
      <button
        onClick={handleLikeClick}
         style={{ backgroundColor: colors[currentColorIndex] }}
      >
        {likes} Likes
      </button>
    </div>
  );
};

export default LikeButton;
