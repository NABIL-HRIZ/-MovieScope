import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/FilterFilms.css';
import * as XLSX from 'xlsx';
import GenresBackground from './GenresIcon';
import ScrollToTopButton from './ScrollToTopButton';
const FilterFilms = () => {
  const [movies, setMovies] = useState([]);
  const [uniqueGenres, setUniqueGenres] = useState([]);
  const [searchInput,setSearchInput]=useState('')
  const [suggestions,setSuggestions]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loading,setLoading]=useState(true)


   const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

       if (value.trim() === '' ) {
      setSuggestions([]);
      setNoResults(false);
      return;
    }

     const filtered = movies.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5); 
    setSuggestions(filtered);

      if (filtered.length === 0) {
    setSuggestions([]);      
    setNoResults(true);    
  } else {
    setSuggestions(filtered);
    setNoResults(false);
  }

  };


 
  useEffect(() => {
    fetch('/-MovieScope/all-movies-data.xlsx')
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => {
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setMovies(jsonData);
        const genres = jsonData.map((movie) => movie.genre);
        const unique = [...new Set(genres)];
        setUniqueGenres(unique);

        setTimeout(() => {
        setLoading(false);
      },1875);
      
    });
  }, []);

  return (
    <>
     <div className="filter-section">
      <div className="form-container">
        <form className="form-input" onSubmit={(e) => e.preventDefault()}>
          <i className="fa-solid fa-magnifying-glass" style={{fontSize:"20px",color:"rgba(21, 58, 4, 1)"}}></i>
          <input
            className="input"
            placeholder="Rechercher un film ..."
            required
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
          />
        </form>

        {noResults && <div className="no-results-message">No film trouvé</div>}

          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((movie, index) => (
                <li key={index}>
                  <Link to={`/film/${movie.id}`}>
                    <div className='suggestions-list-desc'>
                    {movie.title}
                    <img src={movie.image_url} alt="" width={'50px'} height={"50px"}/> 
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
      </div>

      <h1>Explorer par Genre</h1>

       {loading ? (
  <div className="loader-container">
    <div class="loader">
      
    </div>
    <p>En cours de chargement ...</p>
  </div>
) : (
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
)}
    </div>



    <ScrollToTopButton />
    </>
   
  );
};

export default FilterFilms;
