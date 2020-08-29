import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("The header component", () => {
  test("should be rendered", () => {
    const { getByTestId } = render(<Header />);
    const headerElement = getByTestId(/header/i);
    expect(headerElement).toBeInTheDocument();
  });

  test(" should contains a h1 heading", () => {
    const { getByTestId } = render(<Header />);
    const headingElement = getByTestId(/heading/i);
    expect(headingElement).toBeInTheDocument();
  });
});
