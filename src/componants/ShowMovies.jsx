import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../styles/ShowMovies.css';

// import required modules
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
        <h1>Explorer Les Films</h1>
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
         {data.map((movie, i) => (
          <SwiperSlide key={i} style={{ width: '300px' }} className=''>
            <img
              src={movie.image_url}
              alt={movie.title}
              style={{ width: '100%', height: '300px', objectFit: 'cover'}}
            />
            <div style={{ padding: '10px' }} className='movie-description'>
              <h3>{movie.title}</h3>
              <h4>{movie.year} · {movie.genre}</h4>
              <span><i class="fa-solid fa-star"></i>   {movie.rating}</span>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
    
  )
}

export default ShowMovies
