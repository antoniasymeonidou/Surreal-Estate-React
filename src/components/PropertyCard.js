import React from "react";
import PropTypes from "prop-types";
import {
  FaBed,
  FaBath,
  FaFortAwesome,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function PropertyCard({
  _id,
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
  userID,
  onSaveProperty,
}) {
  return (
    <div>
      <div className="logo-background">
        <FaFortAwesome className="house-logo" data-testid="house-logo-id" />
      </div>

      <div className="title-city">{`${title}, ${city}`}</div>
      <div className="type-select">{type}</div>
      <div className="bathroom-number">
        <FaBath />
        {bathrooms}
      </div>
      <div className="bedroom-number">
        <FaBed />
        {bedrooms}
      </div>
      <div className="price">{`${price} £`}</div>
      {userID ? (
        <button
          onClick={() => onSaveProperty(_id)}
          className="save-button"
          type="button"
        >
          <FaHeart className="save-logo" />
        </button>
      ) : null}
      <div className="mail-button">
        <a className="mail-button-text" href={`mailto:${email}`}>
          <FaEnvelope />
          Email
        </a>
      </div>
    </div>
  );
}

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
};