import React from "react";
import PropTypes from "prop-types";
import { FaFortAwesome, FaTrashAlt } from "react-icons/fa";

export default function FavouriteCard({
  title,
  city,
  price,
  deleteFavourite,
  _id,
}) {
  return (
    <div>
      <div className="logo-background">
        <FaFortAwesome className="house-logo" data-testid="house-logo-id" />
      </div>
      <div className="title-city">{`${title}, ${city}`}</div>
      <div className="price">{`${price} £`}</div>
      <button
        onClick={() => deleteFavourite(_id)}
        className="delete-button"
        type="button"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
}

FavouriteCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deleteFavourite: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
};