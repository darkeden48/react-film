import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../api/apiService";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then((data) => setReviews(data.results));
  }, [movieId]);

  return (
    <ul>
      {reviews &&
        reviews.map((el) => (
          <li key={el.id}>
            <h2>Author: {el.author}</h2>
            <p>{el.content}</p>
          </li>
        ))}
    </ul>
  );
}
