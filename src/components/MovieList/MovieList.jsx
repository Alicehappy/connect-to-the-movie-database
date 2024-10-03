import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      <h2 className="movie-list__heading">Animations Movies</h2>
      <div className="movie-list__items">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
