import React, { useState, useEffect } from 'react'; 
 
const Rating = ({children}) => {

  const [stars, setStars] = useState([0,0,0,0,0]);

  useEffect(()=> {
     calculateStars()
  } )
  
  let calculateStars =()=>{
    // let statsCopy = stars
    // for (let i = 0; i < Math.round(children); i++) {
    //     stars[i] = 1 
    // }
    console.log("stars");

    // console.log(statsCopy);
    // setStars(statsCopy) 
  }
  return (
    <div>    
         {/* <img src='../assets/images/star-regular.svg'></img> */}
         <p> 
            {stars.map(( state,i) => state == 0 ? <span key={i}>☆</span> : <span key={i} >★</span> )} 
         </p>
    </div>
  )
}

export default Rating


