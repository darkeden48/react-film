import { Link } from "react-router-dom";

export default function MovieCard({ film }) {
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
          alt={film.original_name}
        ></img>
      </div>
      <h1>
        {film.title}({film.release_date && film.release_date.slice(0, 4)})
      </h1>
      <p>User Score: {Math.floor(film.vote_average * 10 * 100) / 100}%</p>
      <h2>Overview</h2>
      <p>{film.overview}</p>
      <h3>Genres</h3>
      <ul>
        {film.genres && film.genres.map((el) => <li key={el.id}>{el.name}</li>)}
      </ul>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={`/movies/${film.id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${film.id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
