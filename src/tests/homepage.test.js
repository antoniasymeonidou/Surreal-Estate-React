import React from "react";
import { render } from "@testing-library/react";
import Homepage from "../components/Homepage";

describe("Homepage", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Homepage />);
    expect(asFragment()).toMatchSnapshot();
  });
});