import React, { useState, useEffect } from 'react';
import defaultProfileImg from '../resources/static/images/profile.png';
import '../resources/static/css/nav.css';

const NavigationBar = ({ setIsAuthenticated }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownVisible((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.navbar__profile-container')) {
      setIsDropdownVisible(false);
    }
  };

  const handleLogout = () => {
    if(localStorage.getItem('authToken')) {
      localStorage.removeItem('authToken');
      setIsAuthenticated(false);
    }
    if(localStorage.getItem('expiresIn')) {
      localStorage.removeItem('expiresIn');
    }
  };

  useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownVisible]);

  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Transact</li>
        <li className="navbar__item">Reports</li>
        <li className="navbar__item">Latest Finance News</li>
        <li
          className="navbar__profile-container"
          onClick={handleDropdown}
        >
          <img
            src={defaultProfileImg}
            alt="Profile"
            className="navbar__profile-image"
          />
          {isDropdownVisible && (
            <ul className="navbar__dropdown">
              <li className="navbar__dropdown-item">Edit Profile</li>
              <li className="navbar__dropdown-item" onClick={handleLogout}>Logout</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
