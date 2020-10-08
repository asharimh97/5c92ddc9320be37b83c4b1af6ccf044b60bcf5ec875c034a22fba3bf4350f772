import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardMovie = ({ movie, onClickPoster, ...props }) => {
  const { Title, imdbID: id, Poster } = movie;
  return (
    <div data-testid="movie-card" className="w-full">
      <div
        data-testid="movie-thumbnail"
        className="relative w-full h-56 mb-3"
        onClick={onClickPoster}
      >
        <img
          src={Poster}
          alt={Title}
          className="absolute inset-0 object-center object-cover rounded h-full w-full"
        />
      </div>
      <Link to={`/movie/${id}`}>
        <p data-testid="movie-title" className="truncate text-sm text-gray-500">
          {Title}
        </p>
      </Link>
    </div>
  );
};

CardMovie.propTypes = {
  movie: PropTypes.object,
  onClickPoster: PropTypes.func
};

CardMovie.defaultProps = {
  onClickPoster: () => {}
};

export default CardMovie;
