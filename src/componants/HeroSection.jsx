import React, { useEffect } from 'react';
import { useRef } from 'react';
import '../styles/HeroSection.css';
import img from '../assets/sec-img.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  const videoRef = useRef(null);

  
useEffect(() => {
  const video = videoRef.current;
  if (video) {
    video.currentTime = 73;
    video.play();

    video.addEventListener("timeupdate", () => {
      if (video.currentTime >= 110) {
        video.currentTime = 73; 
      }
    });
  }
}, []);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section className='hero-section'>
      <div className="section-content" >

       <video
        ref={videoRef}
        className="video-bg"
        muted
        loop
        
      >
        <source src="./50 Movies to Watch Before You Die.mp4" type="video/mp4" />
        
      </video> 
       
        <div className='stars' data-aos="fade-right" data-aos-delay="500">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>

    
        <div className='content-section'>
          
          <div 
            className='content-left' data-aos="fade-right" data-aos-delay="500">

            <h3>Le film parfait pour votre soirée en quelques clics</h3>
 
           
            <p>Action, comédie, drame ou science-fiction ? Découvrez des films qui correspondent à vos envies du moment.</p>

            <button><Link to="/chercher" style={{color:'#fff',textDecoration:"none"}}><i className="fa-solid fa-circle-play"></i> Trouver mon film</Link> </button>
          </div>

        
          <div 
            className="content-right"  
            data-aos="fade-left"
            data-aos-delay="1000" 
          >
            <img src={img} alt=""/>
            <h3>+ 50 films & séries</h3>
            <h4>Ausez-vous bien ! </h4>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
