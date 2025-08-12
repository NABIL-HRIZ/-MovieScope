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
const App = () => {
  return (
    <Router>
    <MyNavbar />
      <Routes>
        <Route path='/' element={
          <>
            <HeroSection />
          <ShowMovies />
          </>
        
          
        } />
        <Route path='/propos-nous'
        element={
          <About />
        } />
        <Route path='/afficher-films' element={<AfficherFilms />}/>
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
