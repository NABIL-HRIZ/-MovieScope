import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/About.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import AboutContent from './AboutContent';
import NosValues from './NosValues';

export default function About() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className='slide1'>
      <div className="slide1-text">
      <h2>Bienvenue sur MovieScope 🎬</h2>
      <p>
        MovieScope est votre destination ultime pour découvrir, explorer et apprécier les films 
        du monde entier. Notre objectif est de vous offrir des critiques fiables.
      </p>
                 <Link className='btn btn-pulse' to="/Afficher-films">Afficher Toutes </Link>

    </div>


        </SwiperSlide>
        <SwiperSlide className='slide2'>
    <div className="slide2-text">
      <h2>Des fonctionnalités riches</h2>
      <p>
        Avec notre moteur de recherche intelligent, nos listes de tendances et notre système 
        de favoris, vous ne manquerez jamais un film qui mérite d’être vu. Naviguez facilement 
        et trouvez le contenu qui correspond à vos goûts.
      </p>
                          <Link className='btn btn-pulse' to="/Afficher-films">Afficher Toutes </Link>



    </div>


        </SwiperSlide>
        <SwiperSlide className='slide3'>

      <div className="slide3-text">
      <h2>Une communauté passionnée</h2>
      <p>
        Rejoignez une communauté de cinéphiles, partagez vos avis, notez les films et participez 
        aux discussions. Ensemble, célébrons l’art du cinéma et explorons les merveilles qu’il a 
        à offrir.
      </p>
                     <Link className='btn btn-pulse' to="/Afficher-films">Afficher Toutes </Link>

    </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <AboutContent />
      <NosValues />
    </>
  );
}
