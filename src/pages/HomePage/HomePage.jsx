import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";

// const API_URL = "http://localhost:5000/";
// const API_KEY = "?api_key=470ed2f7152cde3cb2e6dbbf664e9f1c";
//Science Genre id: 878
//animation id: 16

export default function HomePage({ movies }) {
  // const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(null);
  const [showMovies, setShowMovies] = useState(false);
  const [infoMessage, setInfoMessage] = useState(false);
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const inputSearch = event.target.elements.search.value;

    if (inputSearch === "animations") {
      setShowMovies(true);
    } else {
      setShowMovies(false);
      setInfoMessage(true);
    }
  };

  // const fetchMovies = async () => {
  //   const { data } = await axios.get(
  //     `${API_URL}api/movies/discover/movie${API_KEY}&with_genres=16`
  //   );
  //   console.log("movie data: ", data);
  //   setMovies(data || []);
  // };

  // useEffect(() => {
  //   const loadMovies = async () => {
  //     try {
  //       await fetchMovies();
  //     } catch (error) {
  //       console.error("There is error fetching movies", error);
  //       setError("Error fetching data");
  //     }
  //   };
  //   loadMovies();
  // }, []);

  const handleOnClick = () => {
    navigate("/");
    setInfoMessage(false);
  };

  if (infoMessage) {
    return (
      <>
        <h1>
          This is a Animations Tool Search, please insert a valide genre 😉
        </h1>
        <button onClick={handleOnClick} className="button">Go Back</button>
      </>
    );
  }

  // if (error) return <p>{error}</p>;
  // if (!Array.isArray(movies)) return <p>No movies found</p>;

  return (
    <>
      <div className="home">
        <div className="home__hero">
          {/* <img src="/src/assets/fun-image.webp" className="home__hero-image"/> */}
          <form className="form" onSubmit={handleOnSubmit}>
          <label htmlFor="searchInput" className="form__label"></label>
          <input
            type="text"
            name="search"
            className="form__search"
            id="searchInput"
            placeholder="Enter a movie genre"
          />
          <button type="submit" className="form__submit">Search</button>
        </form>
        </div>

        {showMovies ? (
          <div className="home__movies">
            <h2>Animations Movies</h2>
            <ul>
              {movies ? <MovieList movies={movies} /> : <p>Loading...</p>}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
