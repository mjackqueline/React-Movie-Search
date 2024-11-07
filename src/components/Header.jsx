import React from 'react';
import MovieLogo from '../assets/MovieLogo.png';
import { ReactComponent as Wave1 } from '../assets/Wave1.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className="nav__container">
        <Wave1 style={{ transform: 'rotate(180deg)' }} className="border-top" />
        <img className="logo" src={MovieLogo} width={200} height={200} alt="movie search logo" />
        <ul className="nav__links">
          <li><Link to="/" className="nav__link">Home</Link></li>
          <li><Link to="/" className="nav__link no-cursor">Contact</Link></li>
          <li><Link to="/" className="nav__link no-cursor">Movies</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
