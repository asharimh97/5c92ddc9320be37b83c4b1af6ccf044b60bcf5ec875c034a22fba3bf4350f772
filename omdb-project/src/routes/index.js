import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllMovies from "../pages/all-movies";
import MovieDetail from "../pages/movie-detail";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:movieId">
          <MovieDetail />
        </Route>
        <Route path="/">
          <AllMovies />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
