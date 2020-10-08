import React from "react";
import { render } from "@testing-library/react";
import MovieHeader from "../../DetailMovie/MovieHeader";

describe("test render movie header", () => {
  let wrapper;
  const props = {
    movie: {
      Title: "Batman v Superman: Dawn of Justice",
      Year: "2016",
      Rated: "PG-13",
      Released: "25 Mar 2016",
      Runtime: "152 min",
      Genre: "Action, Adventure, Sci-Fi",
      Director: "Zack Snyder",
      Writer:
        "Chris Terrio, David S. Goyer, Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), William Moulton Marston (character created by: Wonder Woman)",
      Actors: "Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg",
      Plot:
        "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
      Language: "English",
      Country: "USA",
      Awards: "14 wins & 33 nominations.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "6.4/10"
        },
        {
          Source: "Rotten Tomatoes",
          Value: "28%"
        },
        {
          Source: "Metacritic",
          Value: "44/100"
        }
      ],
      Metascore: "44",
      imdbRating: "6.4",
      imdbVotes: "614,557",
      imdbID: "tt2975590",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "N/A",
      Production:
        "Syncopy, Atlas Entertainment, Warner Bros., Cruel and Unusual, DC Entertainment",
      Website: "N/A",
      Response: "True"
    }
  };

  beforeEach(() => {
    wrapper = render(<MovieHeader {...props} />);
  });

  test("renders without error", () => {
    const { getByTestId } = wrapper;
    const header = getByTestId("movie-header");
    const poster = getByTestId("movie-poster");
    const description = getByTestId("movie-description");
    const info = getByTestId("movie-additional-info");

    expect(header).toBeInTheDocument();
    expect(poster).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(info).toBeInTheDocument();
  });

  test("renders movie description correctly", () => {
    const { getByTestId } = wrapper;
    const year = getByTestId("movie-year");
    const title = getByTestId("movie-title");
    const plot = getByTestId("movie-plot");

    expect(year).toBeInTheDocument();
    expect(year).toHaveTextContent(props.movie.Year);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(props.movie.Title);

    expect(plot).toBeInTheDocument();
    expect(plot).toHaveTextContent(props.movie.Plot);
  });

  test("renders additional info", () => {
    const { getByTestId } = wrapper;
    const duration = getByTestId("movie-duration");
    const language = getByTestId("movie-language");
    const rating = getByTestId("movie-rating");
    const rated = getByTestId("movie-rated");

    expect(duration).toBeInTheDocument();
    expect(language).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(rated).toBeInTheDocument();
  });
});
