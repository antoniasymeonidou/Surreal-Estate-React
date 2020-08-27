import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";
import { FaSearch } from "react-icons/fa";

export default function Sidebar() {
  const { search } = useLocation();
  const history = useHistory();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

  return (
    <div className="sidebar">
      <p className="sidebar-title">Search for a property</p>
      <form className="sidebar-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          placeholder="e.g. Flat..."
        />
        <button type="submit" className="search-button">
          <FaSearch className="search-logo" />
        </button>
      </form>
      <p className="sidebar-title">Filter by city</p>
      <div className="items">
        <Link to="/properties" className="side-item">
          All
        </Link>
        <Link
          to={buildQueryString("query", { city: "Manchester" })}
          className="side-item"
        >
          Manchester
        </Link>
        <Link
          to={buildQueryString("query", { city: "Leeds" })}
          className="side-item"
        >
          Leeds
        </Link>
        <Link
          to={buildQueryString("query", { city: "Sheffield" })}
          className="side-item"
        >
          Sheffield
        </Link>
        <Link
          to={buildQueryString("query", { city: "Liverpool" })}
          className="side-item"
        >
          Liverpool
        </Link>
      </div>
      <p className="sidebar-title">Sort by</p>
      <div className="items">
        <Link to={buildQueryString("sort", { price: 1 })} className="side-item">
          Price Ascending
        </Link>
        <Link
          to={buildQueryString("sort", { price: -1 })}
          className="side-item"
        >
          Price Descending
        </Link>
      </div>
    </div>
  );
}