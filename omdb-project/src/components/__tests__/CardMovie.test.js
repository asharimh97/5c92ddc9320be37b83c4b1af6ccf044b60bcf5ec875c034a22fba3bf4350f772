import React from "react";
import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import CardMovie from "../CardMovie";

describe("test render", () => {
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
    },
    onClickPoster: jest.fn()
  };

  beforeEach(() => {
    wrapper = render(<CardMovie {...props} />, { wrapper: MemoryRouter });
  });

  test("renders without error", () => {
    const { getByTestId } = wrapper;
    const card = getByTestId("movie-card");
    const thumbnail = getByTestId("movie-thumbnail");
    const title = getByTestId("movie-title");

    expect(card).toBeInTheDocument();
    expect(thumbnail).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test("fire `onClickPoster` on click movie thumbnail", () => {
    const { getByTestId } = wrapper;
    const thumbnail = getByTestId("movie-thumbnail");

    fireEvent.click(thumbnail);
    expect(props.onClickPoster).toBeCalled();
  });
});
