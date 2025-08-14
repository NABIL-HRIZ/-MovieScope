import React from 'react'
import '../styles/NosValues.css'
import value1 from '../assets/value1.jpg'
import value2 from '../assets/value2.jpg'
import value3 from '../assets/value3.jpg'
import value4 from '../assets/value4.jpg'
const NosValues = () => {
  return (
    <>
    <div className='Nos-value-secion'>
           <h1>Nos Valeur</h1>
             <div class="parent">
    <div class="div1">
      <img src={value3} alt="" srcset="" width={"250px"} height={"350px"} />
    </div>
    <div class="div2">
      <img src={value2} alt="" srcset="" width={"150px"} />
    
    </div>
    <div class="div3">
      <img src={value1} alt="" srcset=""  width={"150px"}/>

    </div>
    <div class="div4">
      <img src={value4} alt="" srcset=""  width={"150px"}/>

    </div>
    <div class="div5">
        <h2>Passion pour le Cinéma</h2>
        <p>Nous vivons et respirons le septième art, en partageant chaque jour cette passion avec notre communauté</p>

    </div>
    <div class="div6">
        <h2>Qualité et Fiabilité</h2>
        <p>Nous proposons des informations précises et des critiques authentiques pour guider vos choix de films.</p>
    </div>
    <div class="div7"> 
         <h2> Accessibilité pour Tous</h2>
        <p>Nous rendons la découverte de nouveaux films simple, agréable et ouverte à tous les amoureux du cinéma.</p>
    </div>
        </div>
    </div>
      
    
    </>
    
  )
}

export default NosValues
