import React from "react";
import { Link, Outlet } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="bg-cyan-700 flex flex-row justify-between p-5 text-white">
        <div>
          <Link>
            <h2>Logo</h2>
          </Link>
        </div>

        <div className="flex  gap-20 mr-1">
          <Link className="block" to="/">Home</Link>
          <Link className="block" to="/about">About</Link>
          <Link className="block" to="/login">Login</Link>
          <Link className="block" to="/college">College</Link>
        </div>

      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
