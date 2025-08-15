import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as XLSX from "xlsx";
import '../styles/MovieDetail.css';
import ScrollToTopButton from './ScrollToTopButton';
import AOS from 'aos';

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);        
  const [recommended, setRecommended] = useState([]); 
  const { id } = useParams();

     useEffect(()=>{
   AOS.init({duration:800});
  
      })

  useEffect(() => {
    fetch("/-MovieScope/all-movies-data.xlsx")
      .then(res => res.arrayBuffer())
      .then(arrayBuffer => {
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const foundFilm = jsonData.find(item => item.id === parseInt(id));
        setMovie(foundFilm);

        if (foundFilm) {
          const sameGenre = jsonData.filter(
            item => item.genre === foundFilm.genre && item.id !== foundFilm.id
          );
          setRecommended(sameGenre);
        }
      });
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <div
        className="film-detail"
        style={{ background: `url(${movie.image_url})` }}
      >
        <div className="film-detail__overlay" />

        <div className="film-detail__content">
          <div className="film-img">
            <img src={movie.image_url} alt={movie.title} />
          </div>

          <div className="film-infos">
            <h2 className="film-title">{movie.title} <span className="year">{movie.year}</span></h2>

            <div className="meta">
              
              <span className="genre-pill">{movie.genre}</span>

             
              <div className="rating-badgee"> <i className="fa-solid fa-star" style={{fontSize:"12px"}}></i> {movie.rating}</div>
            </div>

            <h4 className="section-label">Synopsis</h4>
            <div className="synopsis-card">
              <p>{movie.summary}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="restfilms-section">
        <h1>Films recommandés</h1>
        <div className="genre-container">
          {recommended.map((m, index) => (
             <Link to={`/film/${m.id}`} key={index}>
              <div
                className="movie-card"
                data-aos="fade-down"
                data-aos-delay={Math.floor(index / 4) * 300}
              >
                <div className="card-header">
                  <img src={m.image_url} alt={m.title} />
                  <div className="rating-badge">
                    <i className="fa-solid fa-star"></i> {m.rating}
                  </div>
                </div>

                <div className="movie-details">
                  <h3>{m.title}</h3>
                  <div className="metaa">
                    <span>{m.year}</span>
                    <span>•</span>
                    <span>{m.genre}</span>
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

export default MovieDetail;
