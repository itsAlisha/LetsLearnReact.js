import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink>
        <Link to="/">Home</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/users/prime">Users</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
      </NavLink>
    </>
  );
};

export default Navbar;
