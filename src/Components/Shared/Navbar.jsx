import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar my-15 bg-base-100 w-full lg:w-3/4 mx-auto">
      <div className="navbar-start">
        <Link to="/" className=" text-main btn btn-ghost normal-case text-2xl">
          Sawland
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tools">Tools</Link>
            </li>
            <li>
              <Link to="/">Blogs</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <RiMenu3Fill className="text-3xl text-main mr-30" />
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box "
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/tools">Tools</Link>
            </li>
            <li>
              <Link to="/">Blogs</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
