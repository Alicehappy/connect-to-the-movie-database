import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="movie-card__image"
      />
      <div className="movie-card__details">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <p>Relaese Date: {movie.release_date}</p>
        <p>Genre: Animation</p>
      </div>
    </div>
  );
};

export default MovieCard;
