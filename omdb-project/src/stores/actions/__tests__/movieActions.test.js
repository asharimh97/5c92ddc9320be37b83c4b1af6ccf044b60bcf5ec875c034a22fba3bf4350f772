import moxios from "moxios";
import { storeFactory } from "../../../utils/testUtils";
import { movieState as initialState } from "../../reducers/movieReducer";
import { getAllMovies, getDetailMovie, getNextPage } from "../movieActions";

describe("test movie actions", () => {
  let store;
  const movie = { ...initialState };

  beforeEach(() => {
    moxios.install();
    store = storeFactory({ movie });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("return movies list with total on `getAllMovies`", () => {
    const params = {
      s: "Batman v superman"
    };

    const response = {
      Search: [
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
      totalResults: "6",
      Response: "True"
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });

    return store.dispatch(getAllMovies(params)).then(res => {
      const movieState = store.getState().movie;
      expect(movieState.movies).toEqual(response.Search);
      expect(movieState.total).toEqual(response.totalResults);
    });
  });

  test("return concatted movies on `getNextPage`", () => {
    const currentState = {
      movie: {
        movies: [
          {
            Title: "Batman v Superman",
            Year: "2013",
            imdbID: "tt6130880",
            Type: "movie",
            Poster: "N/A"
          }
        ]
      }
    };

    store = storeFactory(currentState);

    const params = {
      s: "Batman v superman",
      page: 2
    };

    const response = {
      Search: [
        {
          Title: "Batman v Superman",
          Year: "2013",
          imdbID: "tt6130880",
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
      totalResults: "6",
      Response: "True"
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });

    return store.dispatch(getNextPage(params)).then(res => {
      const movieState = store.getState().movie;
      const expectedMovies = [].concat(
        currentState.movie.movies,
        response.Search
      );

      expect(movieState.movies).toEqual(expectedMovies);
    });
  });

  test("return detail movie by id on `getDetailMovie`", () => {
    const id = "tt2975590";
    const params = {
      i: id
    };

    const response = {
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
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });

    return store.dispatch(getDetailMovie(params)).then(res => {
      const movieState = store.getState().movie;
      expect(movieState.detailMovie[id]).toEqual(response);
    });
  });
});
