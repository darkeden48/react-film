import { Link } from "react-router-dom";

export default function MovieListItem({ movie }) {
  return (
    <Link to={`${movie.id}`}>
      {movie.original_name}
      {movie.original_title}{" "}
    </Link>
  );
}
