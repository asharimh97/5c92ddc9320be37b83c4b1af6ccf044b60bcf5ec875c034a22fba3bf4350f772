import { apiUrl, request } from "../../services/APIRequest";
import {
  GET_ALL_MOVIES,
  GET_MOVIE_DETAIL,
  GET_NEXT_PAGE
} from "../actionTypes";

export const getAllMovies = params => async dispatch => {
  let response = null;
  const req = {
    method: "GET",
    url: apiUrl,
    params
  };

  const res = await request(req);

  if (res) {
    dispatch({
      type: GET_ALL_MOVIES,
      payload: {
        movies: res.Search,
        total: res.totalResults
      }
    });

    response = res;
  }

  return response;
};

export const getNextPage = params => async dispatch => {
  let response = null;
  const req = {
    method: "GET",
    url: apiUrl,
    params
  };

  const res = await request(req);

  if (res) {
    dispatch({
      type: GET_NEXT_PAGE,
      payload: {
        movies: res.Search
      }
    });

    response = res;
  }

  return response;
};

export const getDetailMovie = params => async dispatch => {
  let response = null;
  const req = {
    method: "GET",
    url: apiUrl,
    params
  };

  const res = await request(req);

  if (res) {
    dispatch({
      type: GET_MOVIE_DETAIL,
      payload: {
        movie: res,
        id: params.i
      }
    });

    response = res;
  }

  return response;
};
