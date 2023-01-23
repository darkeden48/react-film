const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "070151ea430b4e74dbca9bca592b262c";

export function fetchTrendMovies() {
  return fetch(`${API_URL}/trending/all/day?api_key=${API_KEY}&page=1`).then(
    (data) => data.json()
  );
}

export function fetchSearchMovies(query) {
  return fetch(
    `${API_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  ).then((data) => data.json());
}
