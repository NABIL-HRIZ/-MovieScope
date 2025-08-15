import React, { useEffect, useState } from 'react'
import * as XLSX from "xlsx";
import { Link } from 'react-router-dom';
import AOS from 'aos'
import '../styles/TopViewFilms.css'
const TopViewFilms = () => {
const [data,setData]=useState([])
  useEffect(()=>{
 AOS.init({duration:800});

    })

 useEffect(() => {
  fetch("/-MovieScope/all-movies-data.xlsx") 
    .then((res) => res.arrayBuffer()) 
    .then((arrayBuffer) => {
      const workbook = XLSX.read(arrayBuffer, { type: "array" }); 
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];  
      const jsonData = XLSX.utils.sheet_to_json(worksheet);       
      setData(jsonData);   
      
      const topMovies = jsonData.filter(movie => movie.topviews === true);
      setData(topMovies);
      
    });
    
}, []);

  return (
    <div className='topview-section'>
      <h1>Films Tendances </h1>
      <p>Découvrez notre sélection</p>

       <div className='movies-grid'>
        {data.map((movie,index) => (
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
  )
}

export default TopViewFilms
