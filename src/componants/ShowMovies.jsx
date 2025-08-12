import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../styles/ShowMovies.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import * as XLSX from "xlsx";
const ShowMovies = () => {
    const [data,setData]=useState([])
    
    useEffect(() => {
  fetch("/movies-scope-data.xlsx") 
    .then((res) => res.arrayBuffer()) 
    .then((arrayBuffer) => {
      const workbook = XLSX.read(arrayBuffer, { type: "array" }); 
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];  
      const jsonData = XLSX.utils.sheet_to_json(worksheet);       
      setData(jsonData);                                          
    });
}, []);
  return (
    <div className='showMovies-section'>
        <h1>Toutes  Les Films   </h1>
<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
          <div className='movies-grid'>
       {data.map((movie, index) => (
  <SwiperSlide key={index} style={{ width: '300px' }}>
    <div className='movie-card'>
      <div className="card-header">
        <img src={movie.image_url} alt={movie.title} />
        <div className="rating-badge">
          <i className="fa-solid fa-star"></i> {movie.rating}
        </div>
      </div>
      
      <div className='movie-details'>
        <h3>{movie.title}</h3>
        <div className="meta">
          <span>{movie.year}</span>
          <span>•</span>
          <span>{movie.genre}</span>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}

      </div>
        
      </Swiper>
    </div>
    
  )
}

export default ShowMovies
