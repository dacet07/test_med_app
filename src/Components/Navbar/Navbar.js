import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

import healthyLogo from '../../assets/images/healthy_logo.png';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    localStorage.removeItem("doctorData");

    // Remove review form data from localStorage
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && key.startsWith("reviewFormData_")) {
        localStorage.removeItem(key);
      }
    }

    setEmail('');
    setIsLoggedIn(false);
    window.location.reload();
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");

    if (storedEmail) {
      setIsLoggedIn(true);
      setEmail(storedEmail);
    }
  }, []);

  const displayName = email ? email.split('@')[0] : '';

  return (
    <nav>
      <div className="nav__logo">
        <a href="/">
          StayHealthy
          <img src={healthyLogo} alt="Healthy logo" />
        </a>
      </div>

      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      <ul className={click ? 'nav__links active' : 'nav__links'}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/search-doctor">Appointments</Link>
        </li>
        <li className="link">
          <Link to="/healthblog">Health Blog</Link>
        </li>
        <li className="link">
          <Link to="/reviews">Reviews</Link>
        </li>

        {isLoggedIn ? (
          <>
            <li className="link dropdown" onClick={handleDropdown}>
              <span className="dropdown-toggle">Welcome, {displayName}</span>
              <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                <div className="profile-menu">
                  <ul>
                    <li>
                      <Link to="/profile">Your Profile</Link>
                    </li>
                    <li>
                      <Link to="/reports">Your Reports</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
