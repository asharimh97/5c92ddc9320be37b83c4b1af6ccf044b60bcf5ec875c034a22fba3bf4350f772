import React from "react";
import PropTypes from "prop-types";
import { IoIosStar } from "react-icons/io";

const MovieHeader = ({ movie, ...props }) => {
  const {
    Poster,
    Plot,
    Year,
    imdbRating,
    Runtime,
    Language,
    Rated,
    Title
  } = movie;
  return (
    <div data-testid="movie-header" className="w-full flex mb-6">
      <img
        data-testid="movie-poster"
        src={Poster}
        alt={Title}
        className="w-48 rounded mr-6"
      />
      <div data-testid="movie-description">
        <p data-testid="movie-year" className="text-gray-600 text-sm">
          {Year}
        </p>
        <h1
          data-testid="movie-title"
          className="text-gray-900 text-2xl font-bold mb-2"
        >
          {Title}
        </h1>
        <p data-testid="movie-plot" className="text-gray-700 mb-4">
          {Plot}
        </p>
        <p className="text-sm mb-2">Summary: </p>
        <div
          data-testid="movie-additional-info"
          className="grid grid-cols-4 gap-2"
        >
          <p data-testid="movie-duration" className="text-xs">
            {Runtime}
          </p>
          <p data-testid="movie-language" className="text-xs">
            {Language}
          </p>
          <p data-testid="movie-rated" className="text-xs">
            {Rated}
          </p>
          <p
            data-testid="movie-rating"
            className="flex items-center text-xs font-bold"
          >
            <IoIosStar fill="#ecc94b" className="mr-1" /> {imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
};

MovieHeader.propTypes = {
  movie: PropTypes.object
};

export default MovieHeader;
