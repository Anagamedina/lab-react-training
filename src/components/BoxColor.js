import React, { useState, useEffect } from 'react';

const BoxColor = ({ r, g, b }) => {
  const [colorRgb, setColorRgb] = useState(0);

  useEffect(() => setRgbColor() );

  const setRgbColor=()=>{
    const colorStr = `rgb(${r},${g},${b})`;
    setColorRgb(colorStr);
  }

  return (
    <div className="box-border colorBox" style={{ background: colorRgb }}>
      Color : {colorRgb}
    </div>
  );
};

export default BoxColor;
