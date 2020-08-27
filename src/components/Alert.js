import React from "react";
import PropTypes from "prop-types";
import "../styles/alert.css";

export default function Alert({ message, success }) {
  if (!message) return null;

  return (
    <div className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};