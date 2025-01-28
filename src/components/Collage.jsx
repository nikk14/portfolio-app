import React from "react";
import { Link, NavLink, Outlet } from "react-router";

const College = () => {
  return (
    <>
      <div className="  border border-red-500 flex flex-col justify-center items-center gap-1.5">

        <h1 className="text-zinc-800 text-3xl font-bold">College</h1>

        <h3><Link to="/" className="hover:bg-blue-400 focus:outline-2 p-0.5 rounded text-lg font-bold underline">Back To Home</Link></h3>

        <div className=" w-full mx-auto h-full">
          <div className="flex justify-center items-center gap-12 bg-amber-100 mt-2 w-full h-full">
            <NavLink className="hover:bg-violet-600 focus:outline-2 p-1 rounded" >students</NavLink>
            <NavLink className="hover:bg-violet-600 focus:outline-2 p-1 rounded" to="departments">Departments</NavLink>
            <NavLink className="hover:bg-violet-600 focus:outline-2 p-1 rounded" to="college-details">College Details</NavLink>
          </div>

          <Outlet />

        </div>

      </div>

    </>
  );
};

export default College;
