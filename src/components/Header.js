import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">watchlist</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">watch list</Link>
            </li>
            <li>
              <Link to="/watched">watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
