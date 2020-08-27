import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  const mockFacebookLogin = jest.fn();
  const mockLoginData = {
    userID: "userID",
    picture: "picture",
    email: "email",
    name: "name",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navbar
          {...mockLoginData}
          onLogin={mockFacebookLogin}
          onLogout={mockFacebookLogin}
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct specs", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Navbar
          {...mockLoginData}
          onLogin={mockFacebookLogin}
          onLogout={mockFacebookLogin}
        />
      </MemoryRouter>
    );
    const logo = getByTestId("logo-id");
    expect(logo).toBeInTheDocument();

    const viewProperties = getByTestId("view-properties-id");
    expect(viewProperties).toHaveTextContent("View Properties");

    const addProperty = getByTestId("add-property-id");
    expect(addProperty).toHaveTextContent("Add Property");

    const favourites = getByTestId("favourites-id");
    expect(favourites).toHaveTextContent("Favourites");
  });
});