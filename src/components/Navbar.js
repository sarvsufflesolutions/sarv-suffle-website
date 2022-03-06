import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm px-8 md:px-20 lg:px-30"
      role="naigation"
    >
      <Link to="/" className="pl-8">
        <img src={Logo} className="h-24 w-24 mt-0" />
        {/* Sarv Suffle */}
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div className="pr-8 md:block hidden">
        <Link
          className="p-4 tracking-wide hover:text-blue-400 hover:transition-all duration-500 hover:text-lg"
          to="/"
        >
          Home
        </Link>
        <Link
          className="p-4 tracking-wide hover:text-blue-400 hover:transition-all duration-500 hover:text-lg"
          to="/about"
        >
          About
        </Link>
        <Link
          className="p-4 tracking-wide hover:text-blue-400 hover:transition-all duration-500 hover:text-lg"
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
