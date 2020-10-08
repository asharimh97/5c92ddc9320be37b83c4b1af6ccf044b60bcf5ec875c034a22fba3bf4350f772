import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CardMovie from "../CardMovie";
import Modal from "../Modal";

let ListMovies = ({ keyword, movies, onLoadMore, total }) => {
  const [showModal, setShowModal] = useState(false);
  const [poster, setPoster] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // eslint-disable-next-line no-unused-expressions
    () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const scrollHeight = document.body.offsetHeight;
    const scrollPos = window.innerHeight + window.scrollY;

    if (total > 5) {
      if (scrollPos + 100 >= scrollHeight) {
        onLoadMore();
      }
    }
  };

  const handleClickPoster = poster => {
    setShowModal(true);
    setPoster(poster);
  };

  return (
    <div data-testid="list-movies" className="py-2">
      <p className="text-sm text-gray-700 mb-4">
        You are looking for: <span className="font-bold">{keyword}</span>
      </p>
      <div data-testid="list-movie-item" className="grid grid-cols-4 gap-4">
        {movies.map(movie => (
          <CardMovie
            data-testid="movie-item"
            key={movie.imdbID}
            movie={movie}
            onClickPoster={() => handleClickPoster(movie.Poster)}
          />
        ))}
      </div>
      <Modal
        data-testid="modal-poster"
        visible={showModal}
        onClose={() => setShowModal(false)}
      >
        <img
          data-testid="modal-poster-image"
          src={poster}
          alt="Active poster"
          className="w-full rounded"
        />
      </Modal>
    </div>
  );
};

ListMovies.propTypes = {
  keyword: PropTypes.string,
  movies: PropTypes.array,
  total: PropTypes.number,
  onLoadMore: PropTypes.func
};

export const UnconnectedListMovies = ListMovies;

const mapStateToProps = state => ({
  movies: state.movie.movies,
  total: state.movie.total
});

const mapDispatchToProps = dispatch => ({});

ListMovies = connect(mapStateToProps, mapDispatchToProps)(ListMovies);

export default ListMovies;
