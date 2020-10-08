import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Layout from "../Layout";

test("renders without error", () => {
  const { getByTestId } = render(<Layout />, { wrapper: MemoryRouter });
  const navbar = getByTestId("navbar");
  const main = getByTestId("main-component");
  const footer = getByTestId("footer");

  expect(navbar).toBeInTheDocument();
  expect(main).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
