import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import Sidebar from "./Sidebar";
import "../styles/Properties.css";

export default function Properties({ userID }) {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios
      .get("https://serene-ocean-88461.herokuapp.com/api/v1/PropertyListing")
      .then((response) => {
        setProperties(response.data);
        setLoad(true);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
        setLoad(true);
      });
  }, []);

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(
        `https://serene-ocean-88461.herokuapp.com/api/v1/PropertyListing${search}`
      )
      .then((response) => {
        setProperties(response.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    axios
      .post("https://serene-ocean-88461.herokuapp.com/api/v1/Favourite", {
        propertyListing: propertyId,
        fbUserId: userID,
      })
      .then(() => {
        setAlert({
          message: "Property saved in favourites.",
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
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  return (
    <>
      <Sidebar />
      {load ? (
        <div className="property-card">
          <Alert message={alert.message} success={alert.isSuccess} />
          <div className="cards">
            {properties.map((property) => (
              <div className="card" key={property._id}>
                <PropertyCard
                  _id={property._id}
                  title={property.title}
                  city={property.city}
                  type={property.type}
                  bathrooms={property.bathrooms}
                  bedrooms={property.bedrooms}
                  price={property.price}
                  email={property.email}
                  userID={userID}
                  onSaveProperty={handleSaveProperty}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="loading">Loading the properties...</div>
      )}
    </>
  );
}

Properties.propTypes = {
  userID: PropTypes.string.isRequired,
};