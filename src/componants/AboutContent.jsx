import React, { useEffect } from 'react'
import '../styles/AboutContent.css'
import AOS from 'aos'

const AboutContent = () => {
    useEffect(()=>{
         AOS.init({delay:500});
    },[])
     const features = [
    {
      icon:<i className="fa-solid fa-film"></i>,
      title: "Collection Soigneusement Sélectionnée",
      description:
        "Nous choisissons chaque film avec passion pour vous offrir une expérience cinématographique exceptionnelle.",
    },
    {
      icon: <i className="fa-solid fa-star"></i>,
      title: "Critiques Authentiques",
      description: "Nos notes reflètent l'opinion de vrais cinéphiles et critiques professionnels.",
    },
    {
      icon:<i className="fa-solid fa-user"></i>,
      title: "Communauté Passionnée",
      description: "Rejoignez une communauté de cinéphiles qui partagent votre amour pour le septième art.",
    },
    {
      icon:<i className="fa-solid fa-heart-circle-check"></i>,
      title: "Fait avec Amour",
      description: "MovieScope est né de notre passion commune pour le cinéma et notre désir de la partager.",
    },
  ]
  return (
    <>
     <div className='about-content'>
        <h1>Pourquoi Nous ?</h1>
    <div class="features-container">
        {features.map((feature,index)=>(
            <div key={index} className='features-description' data-aos="fade-down">
                <div className='feature-icon'>
                    {feature.icon}
                </div>
                <div className='feature-infos'>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                </div>

            </div>
        ))}
            </div>

      
    </div>

   
    
    </>
   

    
  )
}

export default AboutContent
