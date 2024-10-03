import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

const API_URL = "http://localhost:5000/";
const API_KEY = "?api_key=470ed2f7152cde3cb2e6dbbf664e9f1c";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);


  const fetchMovies = async () => {
    const { data } = await axios.get(
      `${API_URL}api/movies/discover/movie${API_KEY}&with_genres=16`
    );
    console.log("movie data: ", data);
    setMovies(data || []);
  };

  useEffect(() => {
    const loadMovies = async () => {
      try {
        await fetchMovies();
      } catch (error) {
        console.error("There is error fetching movies", error);
        setError("Error fetching data");
      }
    };
    loadMovies();
  }, []);

  if (error) return <p>{error}</p>;
  if (!Array.isArray(movies)) return <p>No movies found</p>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage movies={movies}/>} />
        <Route path="/movie/:id" element={<MovieDetailsPage movies={movies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
