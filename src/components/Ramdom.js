import React, { useState, useEffect } from 'react';

function Ramdom({ min, max }) {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    const number = Math.random() * (max - min) + min;
    setRandomNumber(Math.floor(number));
  }, []);
  return (
    <div className='box-border'>
      Random value between {min} and {max} is {randomNumber}
    </div>
  );
}

export default Ramdom;
