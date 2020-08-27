import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";

describe("Sidebar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});