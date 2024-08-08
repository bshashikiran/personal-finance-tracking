import React from 'react';
import profileImg from '../resources/static/images/profile.png'
import '../resources/static/css/nav.css';


const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Transact</li>
        <li className="navbar__item">Reports</li>
        <li className="navbar__item">Latest Finance News</li>
        <li className="">
          <img src={profileImg} alt="Profile" className="navbar__profile-image"/>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
