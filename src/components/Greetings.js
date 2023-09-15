import React from 'react'

const Greetings = ({lang, children}) => {
  const greetingTexts={
    "es":"Hola",
    "en":"Hello",
    "de":"Hallo",
    "fr":"Bonjoür",
  }
  return ( 
    <div className='box-border'>
     {greetingTexts[lang] ||  "Hello"} {children}
    </div>
  )
}

export default Greetings
