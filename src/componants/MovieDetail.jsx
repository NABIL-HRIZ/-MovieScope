import React from 'react'
import { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import * as XLSX from "xlsx";
import '../styles/MovieDetail.css'
import ScrollToTopButton from './ScrollToTopButton';
const MovieDetail = () => {
     const [data,setData]=useState([])
     const {id}=useParams();
        
        useEffect(() => {
      fetch("/movies-data.xlsx") 
        .then((res) => res.arrayBuffer()) 
        .then((arrayBuffer) => {
          const workbook = XLSX.read(arrayBuffer, { type: "array" }); 
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];  
          const jsonData = XLSX.utils.sheet_to_json(worksheet);   
           const foundFilm = jsonData.find((item) => item.id === parseInt(id));
         setData(foundFilm);    
                                                   
        });
       

    }, []);
  return (
       
        <>
          <div
  className="film-detail"
  style={{ '--bg': `url(${data.image_url})` }}
>
  <div className="film-detail__overlay" />

  <div className="film-detail__content">
    <div className="film-img">
      <img src={data.image_url} alt={data.title} />
    </div>

    <div className="film-infos">
      <h2 className="film-title">{data.title}</h2>

      <div className="meta">
             <span className="genre-pill">{data.genre}</span>
                <div className="rating-bagdge">
                <i className="fa-solid fa-star"></i> {data.rating}
              </div>
</div>

      <h4 className="section-label">Synopsis</h4>
      <div className="synopsis-card">
        <p>{data.summary}</p>
      </div>
    </div>
  </div>
</div>
<ScrollToTopButton />


        </>
  


  )
}

export default MovieDetail
