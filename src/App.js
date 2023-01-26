import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MoviesDetailsPage from "./views/MovieDetailsPage";

export default function App() {
  // useEffect(() => {
  //   if (movies.length === 0) {
  //     fetchTrendMovies().then((data) => {
  //       setMovies(data.results);
  //     });
  //   }
  // });

  // const formSubmit = (e) => {
  //   setSearchValue(e);
  //   fetchSearchMovies(e).then((data) => {
  //     setMovies(data.results);
  //   });
  // };

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}></Route>
      </Routes>
    </>
  );
}
