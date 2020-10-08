import React from "react";
import { render, cleanup } from "@testing-library/react";
import { bindElementToQueries } from "@testing-library/dom";
import ListMovies, { UnconnectedListMovies } from "../../MovieList/ListMovies";
import { MemoryRouter } from "react-router-dom";
import { storeFactory } from "../../../utils/testUtils";

describe("test render list movies", () => {
  let wrapper;
  const props = {
    movies: [
      {
        Title: "Batman v Superman: Dawn of Justice",
        Year: "2016",
        imdbID: "tt2975590",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        Title: "Batman v Superman",
        Year: "2013",
        imdbID: "tt6130880",
        Type: "movie",
        Poster: "N/A"
      },
      {
        Title: "Batman V Superman: League at War",
        Year: "2018",
        imdbID: "tt7596414",
        Type: "movie",
        Poster: "N/A"
      },
      {
        Title: "Hot Wheels All Access: Batman v. Superman",
        Year: "2016",
        imdbID: "tt6684296",
        Type: "series",
        Poster: "N/A"
      }
    ],
    keyword: "Batman",
    total: 10,
    onLoadMore: jest.fn()
  };

  beforeEach(() => {
    const container = document.createElement("div");
    container.id = "root";
    wrapper = render(<UnconnectedListMovies {...props} />, {
      container: document.body.appendChild(container),
      wrapper: MemoryRouter
    });
  });

  afterEach(cleanup);

  test("renders without error", () => {
    const { getByTestId } = wrapper;
    const list = getByTestId("list-movies");
    const listItem = getByTestId("list-movie-item");
    const modal = getByTestId("modal-poster");

    expect(list).toBeInTheDocument();
    expect(listItem).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
  });

  test("renders correct number of movie item", () => {
    const { getAllByTestId } = wrapper;
    const items = getAllByTestId("movie-item");

    expect(items.length).toBe(props.movies.length);
  });
});
