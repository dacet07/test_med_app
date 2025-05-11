import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <ul>
        <li>
          <Link to="/profile">Your Profile</Link>
        </li>
        <li>
          <Link to="/reports">Your Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
