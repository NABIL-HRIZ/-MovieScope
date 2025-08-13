import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer-descreption'>
            <h2 style={{color:"#fff"}}>Movie<span style={{color:'#EBFFD8'}}>Scope</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eos, sit pariatur asperiores tempore aut ipsam amet, animi ipsum sint vel nisi perferendis quod reiciendis eius quos. Consectetur, natus? Soluta.</p>
        </div>
        <div className='footer-links'>
            <h2>Liens</h2>
            <ul>
                <li><Link to={'/'} style={{color: 'gray',textDecoration:"none"}}>Accueil</Link></li>
                <li><Link to={'/props-nous'} style={{color:'gray',textDecoration:"none"}}>A prpos-nous</Link></li>
            </ul>
        </div>
        <div className='footer-conatct'>
            <h2>Infos Contact</h2>
            <ul>
                <li><i className="fa-solid fa-phone"></i> +212564563456</li>
                <li><i className="fa-solid fa-envelope"></i> MovieScope@gmail.com</li>
            </ul>

        </div>
      
    </div>
  )
}

export default Footer
