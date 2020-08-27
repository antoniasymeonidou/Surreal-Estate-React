import React from "react";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct text", () => {
    const { getByTestId } = render(<Footer />);
    const footer = getByTestId("footer-id");
    expect(footer).toHaveTextContent("Antonia Symeonidou, 2020");
  });
});