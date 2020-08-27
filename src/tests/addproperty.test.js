import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  const mockHandleAddProperty = jest.fn();
  const mockHandleFieldChange = jest.fn();
  const mockFormData = {
    title: "5 Bedroom House",
    city: "Leeds",
    type: "Detached",
    bedrooms: 5,
    bathrooms: 3,
    price: 650,
    email: "john@mail.com",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <AddProperty
        handleAddProperty={mockHandleAddProperty}
        handleFieldChange={mockHandleFieldChange}
        form={mockFormData}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("submits the title input", () => {
    const { getByLabelText } = render(
      <AddProperty
        mockHandleAddProperty={mockHandleAddProperty}
        handleFieldChange={mockHandleFieldChange}
      />
    );

    const title = getByLabelText("Title");

    fireEvent.change(title, {
      target: { value: mockFormData.title },
    });

    expect(title.value).toBe(mockFormData.title);
  });

  it("submits the city input", () => {
    const { getByLabelText } = render(
      <AddProperty
        mockHandleAddProperty={mockHandleAddProperty}
        handleFieldChange={mockHandleFieldChange}
      />
    );

    const city = getByLabelText("City");
    expect(city.value).toBe("Manchester");

    fireEvent.change(city, {
      target: { value: "Leeds" },
    });

    expect(city.value).toBe("Leeds");
  });

  it("submits the type input", () => {
    const { getByLabelText } = render(
      <AddProperty
        mockHandleAddProperty={mockHandleAddProperty}
        handleFieldChange={mockHandleFieldChange}
      />
    );
    const type = getByLabelText("Type");
    expect(type.value).toBe("Flat");

    fireEvent.change(type, {
      target: { value: "Detached" },
    });

    expect(type.value).toBe("Detached");
  });

  it("submits the bedrooms input", () => {
    const { getByLabelText } = render(
      <AddProperty
        mockHandleAddProperty={mockHandleAddProperty}
        handleFieldChange={mockHandleFieldChange}
      />
    );
    const bedrooms = getByLabelText("Bedrooms");

    fireEvent.change(bedrooms, {
      target: { value: "4" },
    });

    expect(bedrooms.value).toBe("4");
  });

  it("submits the bathrooms input", () => {
    const { getByLabelText } = render(
      <AddProperty
        mockHandleAddProperty={mockHandleAddProperty}
        handleFieldChange={mockHandleFieldChange}
      />
    );
    const bathrooms = getByLabelText("Bathrooms");

    fireEvent.change(bathrooms, {
      target: { value: "3" },
    });

    expect(bathrooms.value).toBe("3");
  });

  it("submits the price input", () => {
    const { getByLabelText } = render(
      <AddProperty
        mockHandleAddProperty={mockHandleAddProperty}
        handleFieldChange={mockHandleFieldChange}
      />
    );
    const price = getByLabelText("Price (£)");

    fireEvent.change(price, {
      target: { value: "1000" },
    });

    expect(price.value).toBe("1000");
  });

  it("submits the email input", () => {
    const { getByLabelText } = render(
      <AddProperty
        mockHandleAddProperty={mockHandleAddProperty}
        handleFieldChange={mockHandleFieldChange}
      />
    );
    const email = getByLabelText("Email");

    fireEvent.change(email, {
      target: { value: "john@mail.com" },
    });

    expect(email.value).toBe("john@mail.com");
  });
});