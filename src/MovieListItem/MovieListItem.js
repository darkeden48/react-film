// import MovieListItem from "../MovieListItem/MovieListItem";

export default function MovieListItem({ movie }) {
  return <p>{movie.name || movie.title}</p>;
}
