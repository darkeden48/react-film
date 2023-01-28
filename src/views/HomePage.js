import { useState, useEffect } from "react";
// import MovieList from "../MovieList/MovieList";
import { fetchTrendMovies } from "../api/apiService";
import { Link } from "react-router-dom";

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
      {movies !== [] && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>
                {movie.original_name}
                {movie.original_title}{" "}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
