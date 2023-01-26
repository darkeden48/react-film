import { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import { fetchTrendMovies } from "../api/apiService";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length === 0) {
      fetchTrendMovies().then((data) => {
        setMovies(data.results);
      });
    }
  });
  return (
    <div>
      <h2>Trending films</h2>
      {movies !== [] && <MovieList movies={movies} />}
    </div>
  );
}
