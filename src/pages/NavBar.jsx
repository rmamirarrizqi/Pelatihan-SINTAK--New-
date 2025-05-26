import React from "react";
import { Link } from "react-router-dom";
import { PiCoffee } from "react-icons/pi";

function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className="font-bold" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/product">
                  Coffe Product
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <PiCoffee />
            Aroma Sriwijaya
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="font-bold hover:text-amber-800" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:text-amber-800" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:text-amber-800" to="/product">
                Coffe Product
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:text-amber-800" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gray-200 text-black mr-4 rounded-xl">
            Request a Quote
          </a>
          <a className="btn bg-amber-800 text-white rounded-xl">Contact Us</a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
