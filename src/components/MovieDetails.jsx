import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import placeholderImage from "../assets/placeholder.png"

const API_URL = 'http://www.omdbapi.com?apikey=c1f9c978';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`${API_URL}&i=${imdbID}`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Header />
    <div className="movie-details">
    <div className="movie-details-container">
    <div className="movie-poster-half">
      <h1>{movie.Title}</h1>
      <figure className="movie-poster-container"><img src={movie.Poster !== "N/A" ? movie.Poster : placeholderImage} alt={movie.Title} className="movie-poster" /></figure>
        </div>
      <div className="movie-info">
    <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default MovieDetails;
