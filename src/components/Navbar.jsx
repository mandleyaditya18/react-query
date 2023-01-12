import React from "react";
import { NavLink } from "react-router-dom";

import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
        <li>
          <NavLink to="iq-books">IQ Books</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
