import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";

describe("test render", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Navbar />, { wrapper: MemoryRouter });
  });

  test("renders without error", () => {
    const { getByTestId } = wrapper;
    const navbar = getByTestId("header-navbar");
    expect(navbar).toBeInTheDocument();
  });

  test("renders navbar brand", () => {
    const { getByTestId } = wrapper;
    const brand = getByTestId("navbar-brand");
    expect(brand).toBeInTheDocument();
  });
});
