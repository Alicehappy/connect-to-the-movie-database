import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";
import "./MovieList.scss";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      <h2 className="movie-list__heading">Animations Movies</h2>
      <div className="movie-list__items">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
