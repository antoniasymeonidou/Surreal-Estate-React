import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import "../styles/AddProperty.css";

export default function AddProperty() {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "1",
      bathrooms: "1",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });

    axios
      .post("", {
        ...fields,
      })
      .then(() => {
        // eslint-disable-next-line no-console
        setAlert({
          message: "Property added.",
          isSuccess: true,
        });
      })
      .then(() => {
        setTimeout(
          () =>
            setAlert({
              message: "",
              isSuccess: false,
            }),
          2000
        );
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property" data-testid="add-property-id">
      <form
        data-testid="form-id"
        className="form-add-property"
        onSubmit={handleAddProperty}
      >
        <Alert message={alert.message} success={alert.isSuccess} />
        <div className="page-title">List your property below</div>
        <label htmlFor="title">
          Title
          <input
            data-testid="title-id"
            className="input-title"
            type="text"
            placeholder="Add a title..."
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            required
          />
        </label>
        <div className="select-fields">
          <label htmlFor="city">
            City
            <select
              data-testid="select-city-id"
              className="input-city"
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
          <label htmlFor="type">
            Type
            <select
              data-testid="select-type-id"
              className="input-type"
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terraced">End of Terraced</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="select-fields">
          <label htmlFor="bedrooms">
            Bedrooms
            <select
              data-testid="select-bedroom-id"
              className="input-bedrooms"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </label>
          <label htmlFor="bathrooms">
            Bathrooms
            <select
              data-testid="select-bathrooms-id"
              className="input-bathrooms"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </label>
        </div>

        <label htmlFor="price">
          Price (£)
          <input
            data-testid="price-id"
            className="input-price"
            placeholder="Add a price..."
            type="number"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-id"
            className="input-email"
            placeholder="Add an email..."
            type="email"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            required
          />
        </label>
        <div className="button">
          <button className="add-button" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}