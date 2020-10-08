import React from "react";
import PropTypes from "prop-types";
import CardMovie from "../CardMovie";

const RelatedMovie = ({ movies, ...props }) => {
  return (
    <div data-testid="related-movie">
      <h3 className="text-xl font-semibold mb-3">Related Movies</h3>
      <div className="grid grid-cols-4 gap-3">
        {movies.map(
          (movie, idx) =>
            idx < 4 && (
              <CardMovie
                data-testid="movie-item"
                key={movie.imdbID}
                movie={movie}
              />
            )
        )}
      </div>
    </div>
  );
};

RelatedMovie.propTypes = {
  movies: PropTypes.array
};

export default RelatedMovie;
