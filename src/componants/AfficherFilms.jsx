import React, { useEffect, useState } from 'react'
import * as XLSX from "xlsx";
import '../styles/AfficherFilms.css'
import AOS from 'aos'
import ScrollToTopButton from './ScrollToTopButton';
import {Link} from 'react-router-dom'
const AfficherFilms = () => {
    const [movies,setMovies]=useState([])

    useEffect(()=>{
 AOS.init({duration:800});

    })

 useEffect(() => {
  fetch("/movies-data.xlsx") 
    .then((res) => res.arrayBuffer()) 
    .then((arrayBuffer) => {
      const workbook = XLSX.read(arrayBuffer, { type: "array" }); 
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];  
      const jsonData = XLSX.utils.sheet_to_json(worksheet);       
      setMovies(jsonData);                                          
    });
}, []);
    
  return (
    <>
      <div className='allfilms-section'>
        <h1>Toutes Les Films</h1>
         <div className='movies-grid'>
        {movies.map((movie, index) => (
          <Link to={`/film/${movie.id}`}>
             <div className='movie-card' key={index} data-aos="fade-down" data-aos-delay={Math.floor(index / 4) *300}>
            <div className="card-header">
              <img
                src={movie.image_url}
                alt={movie.title}
              />
              <div className="rating-badge">
                <i className="fa-solid fa-star"></i> {movie.rating}
              </div>
            </div>
            
            <div className='movie-details'>
              <h3>{movie.title }</h3>
              <div className="metaa">
                <span>{movie.year}</span>
                <span>•</span>
                <span>{movie.genre}</span>
              </div>
            </div>
          </div>
          </Link>
       
        ))}
      </div>

      </div>
      
      <ScrollToTopButton />
    </>
    
      
  )
}

export default AfficherFilms
