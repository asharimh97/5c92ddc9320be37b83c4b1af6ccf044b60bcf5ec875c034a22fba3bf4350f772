import React from "react";
import { render } from "@testing-library/react";
import BannerCover from "../../MovieList/BannerCover";

describe("test render Banner Cover", () => {
  let wrapper;
  const props = {
    keyword: "Batman",
    onSearch: jest.fn()
  };

  beforeEach(() => {
    wrapper = render(<BannerCover {...props} />);
  });

  test("renders without error", () => {
    const { getByTestId } = wrapper;
    const banner = getByTestId("banner-cover");
    const searchbar = getByTestId("movie-searchbar");
    const form = getByTestId("search-movies");

    expect(banner).toBeInTheDocument();
    expect(searchbar).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });

  test("input search has the same initial value of keyword prop", () => {
    const { getByTestId } = wrapper;
    const input = getByTestId("input-search");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(props.keyword);
  });
});
