import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Layout from "../components/Layout";
import { getDetailMovie } from "../stores/actions";
import MovieHeader from "../components/DetailMovie/MovieHeader";
import RelatedMovie from "../components/DetailMovie/RelatedMovie";

let MovieDetail = ({ movieDetail, getDetailMovie, ...props }) => {
  const [loading, setLoading] = useState(true);
  const [failedLoad, setFailedLoad] = useState(false);
  const { movieId } = useParams();

  const getDetail = async () => {
    const params = {
      i: movieId
    };
    const detail = await getDetailMovie(params);

    if (detail) {
      setLoading(false);
    } else {
      setLoading(false);
      setFailedLoad(true);
    }
  };

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout data-testid="page-detail-movie">
      {loading ? (
        "Loading..."
      ) : failedLoad ? (
        <p>Incorrect IMDB ID</p>
      ) : (
        <>
          <MovieHeader
            data-testid="movie-header-detail"
            movie={movieDetail[movieId]}
          />
          <RelatedMovie
            data-testid="related-movie"
            movies={new Array(6).fill(movieDetail[movieId])}
          />
        </>
      )}
    </Layout>
  );
};

MovieDetail.propTypes = {
  movieDetail: PropTypes.object,
  getDetailMovie: PropTypes.func
};

const mapStateToProps = state => ({
  movieDetail: state.movie.detailMovie
});

const mapDispatchToProps = dispatch => ({
  getDetailMovie: bindActionCreators(getDetailMovie, dispatch)
});

MovieDetail = connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

export default MovieDetail;
