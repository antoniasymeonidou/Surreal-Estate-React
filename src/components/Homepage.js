import React from "react";
import "../styles/homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-contents">
        <h3>
          <u>Welcome to Nanou's Estate</u>
        </h3>
        <li>
          Search properties to rent in the UK or list your own.
        </li>
        <li>Login with Facebook and save your favourite properties.</li>
        <li>
          Navigate through search bar to find the best option that fits your
          preferences.
        </li>
      </div>
    </div>
  );
}

export default Homepage;