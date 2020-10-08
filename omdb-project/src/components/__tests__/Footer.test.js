import React from "react";
import { render } from "@testing-library/react";
import Footer from "../Footer";

test("renders without error", () => {
  const { getByTestId } = render(<Footer />);
  const footer = getByTestId("footer-component");
  expect(footer).toBeInTheDocument();
});
