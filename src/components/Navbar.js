import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";
import { FaFortAwesome } from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar({ onLogin, userID, onLogout, name }) {
  const [open, setOpen] = useState(false);

  const handleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <nav>
      <Link to="/" className="logo">
        <FaFortAwesome className="logo-img" data-testid="logo-id" />
        <p className="logo-title">Nanou's Estate</p>
      </Link>

      <ul className={`collapsed ${open ? "open" : ""}`}>
        <li>
          <Link
            to="/properties"
            className="item"
            data-testid="view-properties-id"
          >
            View Properties
          </Link>
        </li>
        <li>
          <Link
            to="/add-property"
            className="item"
            data-testid="add-property-id"
          >
            Add Property
          </Link>
        </li>
        <li>
          <Link to="/favourites" className="item" data-testid="favourites-id">
            Favourites
          </Link>
        </li>
        <li className="facebook-container">
          {userID ? (
            <button
              onClick={onLogout}
              className="my-facebook-button-class"
              type="submit"
            >
              Welcome,
              <br />
              {name}
              <br />
              Sign Out
            </button>
          ) : (
            <FacebookLogin
              appId="651558712097637"
              fields="name,email,picture"
              callback={onLogin}
              cssClass="my-facebook-button-class"
            />
          )}
        </li>
      </ul>
      <button type="button" className="burger" onClick={(e) => handleNav(e)}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  name: PropTypes.string,
};