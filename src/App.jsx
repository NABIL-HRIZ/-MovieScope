import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavbar from './componants/myNavbar';
import HeroSection from './componants/HeroSection';
import About from './componants/About';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ShowMovies from './componants/ShowMovies';
import AfficherFilms from './componants/AfficherFilms';
import Footer from './componants/Footer';
import ScrollToTopButton from './componants/ScrollToTopButton';
import MovieDetail from './componants/MovieDetail';
import FilterFilms from './componants/FilterFilms';
import AfterPage from './componants/AfterFilter';
import AfterFilter from './componants/AfterFilter';
import ScrollToTopOnNavigate from './componants/ScrollToTopOnNavigate';
import TopViewFilms from './componants/TopViewFilms';
import TopRating from './componants/TopRating';
const App = () => {
  return (
    <Router>
    <MyNavbar />
        <ScrollToTopOnNavigate />
      <Routes>
        <Route path='/' element={
          <>
            <HeroSection />
          <ShowMovies />
          <TopViewFilms />
          <TopRating />
          <ScrollToTopButton />
          </>
        
          
        } />
        <Route path='/propos-nous'
        element={
          <>
           <About />
          <ScrollToTopButton />
          </>

        } />
        <Route path='/afficher-films' element={<AfficherFilms />}/>
        <Route path="/film/:id" element={<MovieDetail />} />
        <Route path='/chercher' element={<FilterFilms />} />
        <Route path='/genres/:genreName' element={<AfterFilter />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
