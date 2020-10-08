import { GET_ALL_MOVIES, GET_MOVIE_DETAIL } from "../actionTypes";

const initialState = {
  movies: [],
  total: 0,
  detailMovie: {}
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: action.payload.movies,
        total: action.payload.total
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        detailMovie: {
          ...state.detailMovie,
          [action.payload.id]: action.payload.movie
        }
      };
    default:
      return state;
  }
};

export default movieReducer;
