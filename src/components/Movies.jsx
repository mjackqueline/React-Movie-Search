import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import placeholderImage from '../assets/placeholder.png'

const API_URL = 'http://www.omdbapi.com?apikey=c1f9c978';

const Movies = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    if (query) {
      searchMovies(query);
    }
  }, [query]);

  return (
    <> 
    <Header />
    <div className="movie-container">

      <h1>Results for "{query}"</h1>
      <div className="movie-container">
      {movies.length > 0 ? (
        movies.slice(0, 9).map((movie) => (
          <div className="">
          <div className="movie-topper"></div>
          <div key={movie.imdbID} className="movie">
            <h2>{movie.Title}</h2>
            <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster !== "N/A" ? movie.Poster : placeholderImage} alt={movie.Title} className="movie-img" />
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
