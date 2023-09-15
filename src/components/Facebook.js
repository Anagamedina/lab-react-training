import React, { useState, useEffect } from 'react';
import fbList from '../data/berlin.json';
import "../assets/css/fb.css"
const Facebook = () => {
  const [filtros, setFiltros] = useState(["test","test2"]);
  const [filtroSelected, setFiltroSelected] = useState("Todos");

  useEffect(()=> { 
    let countries = fbList.map(el=>el.country)
    console.log(countries);
    let uniqueCountries = ["Todos",  ...new Set(countries) ]
   // let uniqueCountries =  Array.from(new Set(countries))   
    setFiltros(uniqueCountries)
  },[])
  
    const handleFilterClick=(filtro)=>{
        setFiltroSelected(filtro)
    }
    
    const peopleFiltered=()=>{
         if (filtroSelected === "Todos") {
            return fbList
         }
         
         return fbList.filter(el=> el.country === filtroSelected)
    }

  return (
    <div className="box-border">

    <div className='filtros'>
        {filtros.map(filtro=>(
             <div className={` ${filtro === filtroSelected && 'selected' }  `} onClick={()=>handleFilterClick(filtro)} key={filtro}> {filtro} </div>
        ))}
    </div>

      {peopleFiltered().map((persona, i) => {
        return (
          <div key={i} className='fb_item'>
            <img  src={persona.img} alt='profile'></img>
            <div>
              <p>Firstname:{persona.firstName}</p>
              <p>Lastname:{persona.lastName}</p>
              <p>Country:{persona.country}</p>
              <p>Type:{persona.isStudent ? 'Student':'Teacher'}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Facebook;
