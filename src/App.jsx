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
const App = () => {
  return (
    <Router>
    <MyNavbar />
      <Routes>
        <Route path='/' element={
          <>
            <HeroSection />
          <ShowMovies />
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
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
