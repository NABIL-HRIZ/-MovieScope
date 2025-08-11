import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavbar from './componants/myNavbar';
import HeroSection from './componants/HeroSection';
import About from './componants/About';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
    <MyNavbar />
      <Routes>
        <Route path='/' element={
          <HeroSection />
          
        } />
        <Route path='/propos-nous'
        element={
          <About />
        } />
      </Routes>
    </Router>

  )
}

export default App
