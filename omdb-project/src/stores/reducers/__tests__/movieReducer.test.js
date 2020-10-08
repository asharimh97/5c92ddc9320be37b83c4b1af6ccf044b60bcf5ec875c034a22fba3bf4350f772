import {
  GET_ALL_MOVIES,
  GET_MOVIE_DETAIL,
  GET_NEXT_PAGE
} from "../../actionTypes";
import movieReducer, { movieState } from "../movieReducer";

describe("test movie reducer", () => {
  test("return default state upon unidentified action", () => {
    const newState = movieReducer(undefined, {});
    expect(newState).toEqual(movieState);
  });

  test("return `movies` and `total` upon get all movies", () => {
    const payload = {
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
        }
      ],
      total: 10
    };

    const action = { type: GET_ALL_MOVIES, payload };
    const newState = movieReducer(undefined, action);

    expect(newState.movies).toEqual(payload.movies);
    expect(newState.total).toEqual(payload.total);
  });

  test("return concatted movies upon get movie next page", () => {
    const currentState = {
      ...movieState,
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
        }
      ],
      total: 10
    };

    const payload = {
      movies: [
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

    const action = { type: GET_NEXT_PAGE, payload };
    const expectedMovies = [].concat(currentState.movies, payload.movies);

    const newState = movieReducer(currentState, action);
    expect(newState.movies).toEqual(expectedMovies);
  });

  test("return detail movie by id upon get detail movie", () => {
    const id = "tt2975590";
    const payload = {
      id,
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

    const action = { type: GET_MOVIE_DETAIL, payload };
    const newState = movieReducer(undefined, action);

    expect(newState.detailMovie[id]).toEqual(payload.movie);
  });
});
