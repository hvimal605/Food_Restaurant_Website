import React from 'react';
import './Navbar.css'
import moon from '../Svg/moon.svg'
import { Link } from 'react-router-dom';
import navBurger from '../img/1169900.gif'
import { useState } from 'react';

export default function Navbar() {
//     const loginStatus = () => {
//         const token = localStorage.getItem("jwt");
//         if (token) {
//           return [
//             <>
//            <div>
//             <button>
//                 hello guys
//             </button>
//            </div>
//             </>,
//           ];
//         }
//         else{
//             return [
//                 <>
// <Link to="/login">LOGIN</Link>

//                 </>
//             ]
            

//         }

const [isOpen, setIsOpen] = useState(false);

  // Function to handle button click and toggle the state
  const toggleInputBox = () => {
    setIsOpen(!isOpen);
  };

    
    
    
        
    
    
        return (
            <div className="head">
                <div className="logo">
                    <img src={navBurger} alt="" height="40px" />
                    <h1>HarshMeal</h1>
                </div>

                <div className="navbar">
                    <ul className='flex'>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/createaccount">Create Account</Link></li>
                        <li><Link to="/contactus">CONTACT</Link></li>
                        <li><Link to="/login"><img className="invert inline" src="svg/cart.svg" alt="" height="17" />&nbsp;Cart</Link></li>
                    </ul>

                    
                    <div>
      <div onClick={toggleInputBox}><span className="material-symbols-outlined search">
                        search
                    </span></div>
      {isOpen && (
        <div>
          <input type="text" placeholder="Enter something..." />
        </div>
      )}
    </div>
                    
                    
                </div>

                <div className="phoneno">
                    <span className="material-symbols-outlined phoneintalk">
                        phone_in_talk
                    </span>
                    <span className="number">1234567890</span>

                    <span><button className="btn open-button"><Link to="/login">LOGIN</Link></button></span>

                    <span><button className="  btn darkmodebtn"><img className='invert' src={moon} alt="" /></button></span>
                    
                    

                </div>
            </div>
        );
    }


