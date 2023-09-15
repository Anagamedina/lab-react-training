import React, { useState, useEffect } from 'react';

const  CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color, 
})=> {
  
  const [last4Digits, setLast4Digits] = useState("");
  
  useEffect(()=> {
    setLast4Digits(number.slice(-4)) 
  },[])
  
  
  
  return (
    <div className='credit-card' style={{ background: bgColor, color:color }} >
      <div className='right'><b> {type}</b></div>
      <h1>**** **** **** {last4Digits}</h1>
      <div>
        <p>Expire {expirationMonth}/{expirationYear} {bank}</p>
        <p>{owner}</p>  
      </div>
    </div>
  )
}

export default CreditCard
