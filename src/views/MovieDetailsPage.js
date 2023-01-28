import { useState, useEffect } from "react";
import MovieCard from "../MovieListItem/MovieCard";
import { fetchMovieDetails } from "../api/apiService";
import { useParams, Outlet } from "react-router-dom";

export default function MovieDetailsPage() {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId).then((data) => setMovies(data));
  }, [movieId]);

  return (
    <div>
      <MovieCard film={movies} />
      <Outlet />
    </div>
  );
}
