import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieNight from '../assets/MovieNight.svg';
import Header from "./Header"
import Footer from "./Footer";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <>
     <Header />
      <div className="search-container">
        <h1>Movie Search</h1>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>Search</button>
        <figure className="main__img--wrapper">
          <img src={MovieNight} alt="movie night" className="main__img" />
        </figure>
      </div>
      <Footer />
    </>
  );
};

export default Home;
