import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const mockFormData = {
    title: "5 Bedroom House",
    city: "Leeds",
    type: "Detached",
    bedrooms: 5,
    bathrooms: 3,
    price: 650,
    email: "john@mail.com",
    userID: "54321",
    _id: "12345",
    onSaveProperty: jest.fn(),
  };
  it("renders correctly", () => {
    const { asFragment } = render(<PropertyCard {...mockFormData} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a logo", () => {
    const { getByTestId } = render(<PropertyCard {...mockFormData} />);

    expect(getByTestId("house-logo-id")).toHaveClass("house-logo");
  });

  it("renders a title and city", () => {
    const { getByText } = render(<PropertyCard {...mockFormData} />);

    expect(getByText("5 Bedroom House, Leeds")).toHaveClass("title-city");
  });

  it("renders a type", () => {
    const { getByText } = render(<PropertyCard {...mockFormData} />);

    expect(getByText("Detached")).toHaveClass("type-select");
  });

  it("renders a bathroom number", () => {
    const { getByText } = render(<PropertyCard {...mockFormData} />);

    expect(getByText("3")).toHaveClass("bathroom-number");
  });

  it("renders a bedroom number", () => {
    const { getByText } = render(<PropertyCard {...mockFormData} />);

    expect(getByText("5")).toHaveClass("bedroom-number");
  });

  it("renders a price number", () => {
    const { getByText } = render(<PropertyCard {...mockFormData} />);

    expect(getByText("650 £")).toHaveClass("price");
  });

  it("renders an email button", () => {
    const { getByText } = render(<PropertyCard {...mockFormData} />);

    expect(getByText("Email")).toHaveClass("mail-button-text");
  });
});