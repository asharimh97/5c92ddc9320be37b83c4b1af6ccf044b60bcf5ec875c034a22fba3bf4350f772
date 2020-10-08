import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllMovies } from "../stores/actions";

let AllMovies = ({ getAllMovies }) => {
  useEffect(() => {
    const params = {
      s: "Batman"
    };
    getAllMovies(params);
  });

  return (
    <div>
      <p>Ini halaman all movies</p>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getAllMovies: bindActionCreators(getAllMovies, dispatch)
});

AllMovies = connect(mapStateToProps, mapDispatchToProps)(AllMovies);

export default AllMovies;
