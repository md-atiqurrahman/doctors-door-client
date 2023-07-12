import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link className="hover:bg-accent hover:text-white" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:bg-accent hover:text-white" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="hover:bg-accent hover:text-white" to="/appointment">
          Appointment
        </Link>
      </li>
      <li>
        <Link className="hover:bg-accent hover:text-white" to="/reviews">
          Reviews
        </Link>
      </li>
      <li>
        <Link className="hover:bg-accent hover:text-white" to="/contact">
          Contact Us
        </Link>
      </li>
      <li>
        <Link className="hover:bg-accent hover:text-white" to="/login">
          Login
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100 px-[8px] py-0 mb-[10px]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[16px] font-normal text-black"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case  text-[18px] font-normal text-black hover:bg-accent hover:text-white"
        >
          Doctors Door
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] font-normal text-black">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
