import { useState } from "react";
// import NavigationBar from "./NavigationBar/NavigationBar";
import MovieList from "./MovieList/MovieList";
import { fetchTrendMovies, fetchSearchMovies } from "./api/apiService";
import SearchBar from "./SearchBar/SearchBar";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  console.log(searchValue);
  if (movies.length === 0) {
    fetchTrendMovies().then((data) => {
      setMovies(data.results);
    });
  }

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
