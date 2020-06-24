import React from "react";
import HomeLink from "./HomeLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          POLIMETER NEPAL
        </Link>
        <HomeLink />
      </div>
    </nav>
  );
};

export default Navbar;
