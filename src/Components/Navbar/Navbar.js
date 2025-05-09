import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';

import healthyLogo from '../../assets/images/healthy_logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav>
        <div className="nav__logo">
          <a href="/">
            StayHealthy 
            <img src={healthyLogo} alt="Healthy logo"/>
          </a>
        </div>

        <div className="nav__icon" onClick={handleClick}>
          {/* You can add an icon or hamburger menu here */}
          ☰
        </div>

        <ul className={`nav__links ${menuOpen ? 'active' : ''}`}>
          <li className="link"><a href="../Landing_Page/LandingPage.html">Home</a></li>
          <li className="link"><a href="#">Appointments</a></li>
          <li className="link"><a href="#">Health Blog</a></li>
          <li className="link"><a href="#">Reviews</a></li>
          <li className="link">
            <Link to="/signup">
              <button className="btn1">Sign Up</button>
            </Link>
          </li>
          <li className="link">
            <Link to="/login">
              <button className="btn1">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
