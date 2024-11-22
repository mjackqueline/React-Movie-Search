import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieNight from "../assets/MovieNight.svg";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setIsLoading(true); // Show spinner
  
      // Simulate a loading delay of 2 seconds
      setTimeout(() => {
        setIsLoading(false); // Hide spinner after delay
        navigate(`/search/${searchTerm}`); // Then navigate
      }, 2000); // Adjust the delay as needed (in milliseconds)
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
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
          onKeyDown={handleKeyDown}
          aria-label="Movie search input"
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
        
        {isLoading && (
          <div className="spinner-container">
          <FontAwesomeIcon
            icon={faSpinner}
            className="loading-spinner"
          /></div>
        )}
        
        {!isLoading && (
          <figure className="main__img--wrapper">
            <img src={MovieNight} alt="movie night" className="main__img" />
          </figure>
        )}
      </div>
      <div className="footer-main-page">
      <Footer />
      </div>
    </>
  );
};

export default Home;
