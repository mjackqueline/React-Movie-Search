import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import placeholderImage from "../assets/placeholder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const API_URL = "https://www.omdbapi.com?apikey=c1f9c978";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${API_URL}&i=${imdbID}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
        setMovie({ error: "Could not fetch movie details" });
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) {
    return (
      <div className="spinner-container-movie-details">
        <FontAwesomeIcon icon={faSpinner} className="loading-spinner" />
      </div>
    );
  }

  if (movie.error) {
    return <div className="error-message">{movie.error}</div>;
  }

  return (
    <>
      <Header />
      <div className="movie-details">
        <div className="movie-details-container">
          <div className="back-button-container">
            <button onClick={() => navigate(-1)} className="back-btn">
              ← Back to Search Results
            </button>
          </div>
          <div className="movie-poster-half">
            <h1>{movie.Title}</h1>
            <figure className="movie-poster-container">
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : placeholderImage}
                alt={movie.Title}
                className="movie-poster"
              />
            </figure>
          </div>
          <div className="movie-info">
            <p>
              <strong>Year:</strong> {movie.Year}
            </p>
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.Runtime}
            </p>
            <p>
              <strong>IMDB Rating:</strong> {movie.imdbRating}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
