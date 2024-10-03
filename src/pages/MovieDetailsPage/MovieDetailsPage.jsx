import "./MovieDetailsPage.scss";
import { useParams } from "react-router-dom";

export default function MovieDetailsPage({ movies }) {
  const { id } = useParams();
  console.log("movies detail page");
  console.log(movies);

  const movie = movies.find((movie) => movie.id == id);

  console.log("movie details page movie");
  console.log(movie);
  console.log(id);

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="movie">
      <div className="movie__poster-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="movie__poster"
        ></img>
      </div>

      <div className="movie__content">
        <h2 className="movie__detail movie__detail--title">{movie.title}</h2>
        <p className="movie__detail movie__detail--vote">
          Rate: {movie.vote_average}
        </p>
        <p className="movie__detail movie__detail--vote-count">
          Vote Count: {movie.vote_count}
        </p>
        <p className="movie__detail movie__detail--release">
          Release Date: {movie.release_date}
        </p>
        <p className="movie__detail movie__detail--overview">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
