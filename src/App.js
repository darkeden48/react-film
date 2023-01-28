import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MoviesDetailsPage from "./views/MovieDetailsPage";
import Cast from "./MovieListItem/Cast";
import Reviews from "./MovieListItem/Reviews";
import Layout from "./views/Layout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
            <Route
              path="/movies/:movieId/reviews"
              element={<Reviews />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
