import MovieListItem from "../MovieListItem/MovieListItem";
import { fetchMovieDetails } from "../api/apiService";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieListItem movie={movie} />
        </li>
      ))}
    </ul>
  );
}
