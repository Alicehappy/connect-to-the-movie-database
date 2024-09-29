import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=470ed2f7152cde3cb2e6dbbf664e9f1c";
//Science Genre id: 878
//animation id: 16

function App() {
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `${API_URL}discover/movie${API_KEY}&with_genres=16`
    );
    console.log("movie data: ", data.results);
    setMovies(data.results || []);
  };

  useEffect(() => {
    const loadMovies = async () => {
      try {
        await fetchMovies();
        // setLoading(false);
      } catch (error) {
        console.error("There is error fetching movies", error);
        setError("Error fetching data");
        // setLoading(false);
      }
    };
    loadMovies();
  }, []);

  // if (loading) return <p>Loading movies....</p>;
  if (error) return <p>{error}</p>;
  if (!Array.isArray(movies)) return <p>No movies found</p>;

  return (
    <div>
      <h2>Animations Movies</h2>
      <ul>
        {movies ? movies.map((movie) => {
          return (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <p>{movie.release_date}</p>
              <p>Genre: Science Fiction</p>
              <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            </li>
          );
        }) : (<p>Loading...</p>)}
      </ul>
    </div>
  );
}

export default App;
