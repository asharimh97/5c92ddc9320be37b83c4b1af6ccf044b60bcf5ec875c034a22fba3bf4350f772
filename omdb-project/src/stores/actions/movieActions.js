import { apiUrl, request } from "../../services/APIRequest";
import { GET_ALL_MOVIES } from "../actionTypes";

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
