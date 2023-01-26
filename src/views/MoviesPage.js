import { useState } from "react";
import { fetchSearchMovies } from "../api/apiService";
import MovieList from "../MovieList/MovieList";
import SearchBar from "../SearchBar/SearchBar";

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
      {movies !== [] && <MovieList movies={movies} />}
    </>
  );
}
