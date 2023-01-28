import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../api/apiService";

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then((data) => setCast(data.cast));
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map((el) => (
          <li key={el.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
              alt={el.name}
            ></img>
            <h2>{el.name}</h2>
            <p>{el.character}</p>
          </li>
        ))}
    </ul>
  );
}
