import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("displays an error message", () => {
    const component = render(
      <Alert message="Server Error. Please, try again later." />
    );
    const alertMessageNode = component.getByText(
      "Server Error. Please, try again later."
    );

    expect(alertMessageNode.textContent).toBe(
      "Server Error. Please, try again later."
    );
  });

  it("displays a success message", () => {
    const component = render(<Alert message="Property added." success />);
    const alertMessageNode = component.getByText("Property added.");

    expect(alertMessageNode.textContent).toBe("Property added.");
  });

  it("does not render an error or a success message if message props is empty", () => {
    const { asFragment } = render(<Alert message="" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("display an error message", () => {
    const { getByText, asFragment } = render(<Alert message="Error" />);

    expect(getByText("Error").textContent).toBe("Error");
    expect(asFragment()).toMatchSnapshot();
  });

  it("display a success message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success" success />
    );

    expect(getByText("Success").textContent).toBe("Success");
    expect(asFragment()).toMatchSnapshot();
  });
});