import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as XLSX from "xlsx";
import ScrollToTopButton from "./ScrollToTopButton";
import '../styles/AfterFilter.css'
import AOS from "aos";
const AfterFilter = () => {
  const { genreName } = useParams();
  const {id}=useParams();
  const [movies, setMovies] = useState([]);

     useEffect(()=>{
   AOS.init({duration:800});
  
      })


  useEffect(() => {
    fetch("/all-movies-data.xlsx")
      .then(res => res.arrayBuffer())
      .then(arrayBuffer => {
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setMovies(jsonData);
      });
  }, []);

  const filtered = movies.filter(movie => movie.genre === genreName);

  return (
      <>
      <div className="afterfilter-section">
      <h1>Films <span>{genreName}</span> </h1>
      <p>Les meilleurs films du genre  {genreName}</p>
      <div className="genre-container">

      {filtered.map((movie, index) => (
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
  );
};

export default AfterFilter;
