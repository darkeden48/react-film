import { useState } from "react";
import { fetchSearchMovies } from "../api/apiService";
// import MovieList from "../MovieList/MovieList";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const formSubmit = (e) => {
    setSearchValue(e);
    fetchSearchMovies(e).then((data) => {
      setMovies(data.results);
    });
  };
  return (
    <>
      <SearchBar search={searchValue} onSubmit={formSubmit} />
      {movies !== [] && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>
                {movie.original_name}
                {movie.original_title}{" "}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
