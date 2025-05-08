import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav>
       
        <div className="nav__logo">
         
          <a href="/">
            StayHealthy 
            
            <img src="../../images/healthy_logo.png" alt="Healthy logo"/>
               
          </a>
         
        </div>
       
        <div className="nav__icon" onClick={handleClick}>
          
        </div>

       
        <ul className="nav__links active">
           <li className="link">
            <a href="../Landing_Page/LandingPage.html">Home</a>
          </li>
          <li className="link">
            <a href="#">Appointments</a>
          </li>
          <li className="link">
            <a href="#">Health Blog</a>
          </li>
          <li className="link">
            <a href="#">Reviews</a>
          </li>
          <li className="link">
            <a href="../Sign_Up//Sign_Up.html">
              <button className="btn1">Sign Up</button>
            </a>
          </li>
          <li className="link">
            <a href="../Login/Login.html">
              <button className="btn1">Login</button>
            </a>
          </li>
        </ul>
    </nav>
    </div>
  );
};

export default Navbar;
