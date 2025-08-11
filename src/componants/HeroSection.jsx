import React from 'react'
import '../styles/HeroSection.css'
import img from '../assets/sec-img.jpg'



const HeroSection = () => {
  return (
     <section className='hero-section'>
       <div className="section-content">
        <div className='stars'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>

        </div>
        <div className='content-section'>
            <div className='content-left'>
              <h3>Explorez notre collection de films</h3>
            </div>
            <div className="content-right">
                <img src={img} alt=""/>
                <h3>+ 50 films & séries</h3>
                <h4>Ausez-vous bien ! </h4>

            </div>

        </div>
       
       </div>
     </section>
  )
}

export default HeroSection
