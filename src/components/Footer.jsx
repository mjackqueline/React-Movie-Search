import React from 'react';
import MovieLogo from '../assets/MovieLogo.png';
import Wave1 from '../assets/Wave1.svg';
import Wave2 from '../assets/Wave2.svg';
import Wave3 from '../assets/Wave6.svg';

const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
        <div id="page__footer" className="row">
            <div className="footer__list">
                <a href="#">
                    <figure className="footer__logo">
                        <img src={MovieLogo} className="footer__logo--img" alt="movie search logo" height={100} width={100} />
                    </figure>
                </a>
                <a href="" className="footer__link">Home</a>
                <a href="" className="footer__link no-cursor">About</a>
                <a href="" className="footer__link no-cursor">Movies</a>
                <a href="" className="footer__link no-cursor">Contact</a>
            </div>
            <div className="footer__copyright">Copyright &copy; 2024 Movie Search
            </div>
        </div>
    </div>
    <img className="border" src={Wave1} />
    <img className="wave1" src={Wave2} />
    <img className="wave2" src={Wave3} />
    <img className="wave3" src={Wave3} />

</footer>
  )
}

export default Footer