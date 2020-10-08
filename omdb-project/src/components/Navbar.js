import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <header data-testid="header-navbar" {...props}>
      <Container className="flex justify-between items-center py-4">
        <Link to="/" data-testid="navbar-brand" className="uppercase font-bold">
          Movie List
        </Link>
        <a
          href="#"
          className="text-xs text-white bg-red-600 py-1 px-2 rounded-full"
        >
          Download
        </a>
      </Container>
    </header>
  );
};

export default Navbar;
