import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Layout from "../components/Layout";
import BannerCover from "../components/MovieList/BannerCover";

import { getAllMovies, getNextPage } from "../stores/actions";
import ListMovies from "../components/MovieList/ListMovies";

class AllMovies extends PureComponent {
  constructor(props) {
    super(props);

    const defaultKeyword = "Justice league";

    this.state = {
      page: 1,
      keyword: defaultKeyword,
      loading: false,
      completed: false
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const { keyword, page } = this.state;
    const { getAllMovies } = this.props;

    const params = {
      s: keyword,
      page
    };

    await getAllMovies(params);
  };

  handleSearchMovie = async val => {
    await this.setState({ keyword: val, page: 1 });
    this.getMovies();
  };

  handleNextPage = async () => {
    const { page, keyword, loading, completed } = this.state;
    const { getNextMovies, movies, total } = this.props;

    const params = {
      s: keyword,
      page: page + 1
    };

    if (!loading && !completed) {
      this.setState({ page: page + 1, loading: true });
      const getData = await getNextMovies(params);

      if (getData) {
        this.setState({ loading: false });
      } else {
        // eslint-disable-next-line eqeqeq
        if (movies.length == total) {
          this.setState({ loading: false, completed: true });
        }
      }
    }
  };

  render() {
    const { keyword, loading, completed } = this.state;
    return (
      <Layout>
        <BannerCover
          data-testid="banner-cover"
          onSearch={this.handleSearchMovie}
          keyword={keyword}
        />
        <ListMovies
          data-testid="list-movies"
          keyword={keyword}
          onLoadMore={this.handleNextPage}
        />
        {loading && (
          <p
            data-testid="loading-next-page"
            className="text-center text-gray-500 text-sm"
          >
            Loading more movies...
          </p>
        )}
        {completed && (
          <p
            data-testid="complete-load-movies"
            className="text-center text-gray-500 text-sm"
          >
            All movies has been loaded
          </p>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movie.movies,
  total: state.movie.total
});

const mapDispatchToProps = dispatch => ({
  getAllMovies: bindActionCreators(getAllMovies, dispatch),
  getNextMovies: bindActionCreators(getNextPage, dispatch)
});

AllMovies = connect(mapStateToProps, mapDispatchToProps)(AllMovies);

export default AllMovies;
