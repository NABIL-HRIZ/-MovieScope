import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/FilterFilms.css';
import * as XLSX from 'xlsx';
import GenresBackground from './GenresIcon';
import ScrollToTopButton from './ScrollToTopButton';
const FilterFilms = () => {
  const [movies, setMovies] = useState([]);
  const [uniqueGenres, setUniqueGenres] = useState([]);

  useEffect(() => {
    fetch('/all-movies-data.xlsx')
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => {
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setMovies(jsonData);
        const genres = jsonData.map((movie) => movie.genre);
        const unique = [...new Set(genres)];
        setUniqueGenres(unique);
      });
  }, []);

  return (
    <>
     <div className="filter-section">
      <div className="form-container">
        <form className="form-input">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className="input"
            placeholder="Rechercher un film ..."
            required
            type="text"
          />

        </form>
      </div>

      <h1>Explorer par Genre</h1>
     <div className="genres-grid">
  {uniqueGenres.map((genre, index) => (
    <Link to={`/genres/${genre}`}>
    <div className="filterParGenre" key={index}  style={{
      backgroundImage: `url(${GenresBackground[genre]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
     <span className="text">{genre}</span>
      <p>Découvrir les Films</p>
    </div>
    </Link>
    
  ))}
</div>
    </div>



    <ScrollToTopButton />
    </>
   
  );
};

export default FilterFilms;
