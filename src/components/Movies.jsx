import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import placeholderImage from "../assets/placeholder.png";
import Sorter from "./Sorter";

const API_URL = "http://www.omdbapi.com?apikey=c1f9c978";

const Movies = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    if (query) {
      searchMovies(query);
    }
  }, [query]);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const sortedMovies = [...movies].sort((a, b) => {
    if (sortOption === "year-desc") {
      return parseInt(b.Year) - parseInt(a.Year);
    } else if (sortOption === "year-asc") {
      return parseInt(a.Year) - parseInt(b.Year);
    } else if (sortOption === "title-asc") {
      return a.Title.localeCompare(b.Title);
    } else if (sortOption === "title-desc") {
      return b.Title.localeCompare(a.Title);
    }
    return 0; 
  });

  return (
    <>
      <Header />
      <Sorter onSortChange={handleSortChange} />
      <div className="movie-container">
        <h1>Results for "{query}"</h1>
        <div className="movie-container">
          {sortedMovies.length > 0 ? (
            sortedMovies.slice(0, 9).map((movie) => (
              <div key={movie.imdbID} className="movie-card">
                <div className="movie-topper"></div>
                <div className="movie">
                  <h2>{movie.Title}</h2>
                  <Link to={`/movie/${movie.imdbID}`}>
                    <img
                      src={
                        movie.Poster !== "N/A" ? movie.Poster : placeholderImage
                      }
                      alt={movie.Title}
                      className="movie-img"
                    />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No movies found</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Movies;
