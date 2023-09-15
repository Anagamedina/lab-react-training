import React from 'react'
import './App.css';

import json from "./data/berlin.json"
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Ramdom from './components/Ramdom';
import BoxColor from './components/BoxColor';
import LikeButton from './components/LikeButton';


import CreditCard from './components/CreditCard';

import Rating from './components/Rating';
import Carousel from './components/Carousel';

import SignupPage from './components/SignupPage';

import Facebook from './components/Facebook';
function App() {
 
   

  console.log(json);
  return (
    <div>
      {/* { json.slice(0,2).map(el=> (<IdCard props={el} ></IdCard>) ) } */}

      <hr/>

      <Greetings lang="es">Ludwig</Greetings>
      <Greetings lang="en">Ludwig</Greetings>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">Ludwig</Greetings>
      <Greetings lang="test">Ludwig</Greetings>

      <hr/>
      <Ramdom min={2} max={10} />
      <Ramdom min={2} max={10} />
      <Ramdom min={2} max={10} />
      <Ramdom min={2} max={10} />
      <hr/>
     <BoxColor r={ 233} g={23} b={23}/>
     <br></br>
      <BoxColor r={23 } g={32} b={23}/>

<div className='credit-cards'>
      <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>
    
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>
    
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
/>

</div>

<Rating>1</Rating>
<Rating>1.4</Rating>
<Rating>2</Rating>
<Rating>3</Rating>

  <p>test</p>
  <div style={{display:"flex", gap:15}}>
<LikeButton></LikeButton>
<LikeButton></LikeButton>

    </div> 

    <Carousel></Carousel>

    <SignupPage></SignupPage>
    <Facebook></Facebook>
    </div>
  )
}

export default App

// <Carousel images={images} />
//<LikeButton />