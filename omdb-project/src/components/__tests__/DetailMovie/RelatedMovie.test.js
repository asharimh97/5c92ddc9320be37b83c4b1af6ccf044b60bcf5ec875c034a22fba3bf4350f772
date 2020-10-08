import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RelatedMovie from "../../DetailMovie/RelatedMovie";

describe("test render related movies", () => {
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
    ]
  };

  beforeEach(() => {
    wrapper = render(<RelatedMovie {...props} />, { wrapper: MemoryRouter });
  });

  test("renders without error", () => {
    const { getByTestId } = wrapper;
    const component = getByTestId("related-movie");
    expect(component).toBeInTheDocument();
  });

  test("renders list of movie correctly", () => {
    const { getAllByTestId } = wrapper;
    const items = getAllByTestId("movie-item");

    expect(items.length).toEqual(props.movies.length);
  });
});
