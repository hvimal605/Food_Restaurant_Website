import React from 'react'
import './Navbar.css'
import moon from '../Svg/moon.svg'
import { Link } from 'react-router-dom';
import navBurger from '../img/1169900.gif'





export default function Navbaradmin() {
  return (
    <div>
    <div className="head">
                <div className="logo">
                    <img src={navBurger} alt="" height="40px" />
                    <h1>HarshMeal</h1>
                </div>

                <div className="navbar">
                    <ul className='flex'>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/bestSels">BEST SELS</Link></li>
                        <li><Link to="/contactus">CONTACT</Link></li>
                        <li><Link to="/login"><img className="invert inline" src="svg/cart.svg" alt="" height="17" />&nbsp;Cart</Link></li>
                    </ul>

                    <span className="material-symbols-outlined search">
                        search
                    </span>
                </div>

                <div className="phoneno">
                    <span className="material-symbols-outlined phoneintalk">
                        phone_in_talk
                    </span>
                    <span className="number">9528932927</span>

                    <span><button className="btn open-button"><Link to="/login">LOGIN</Link></button></span>

                    <span><button className="  btn darkmodebtn"><img className='invert' src={moon} alt="" /></button></span>
                    
                  

                </div>
              
            </div>
      
    </div>
  )
}
