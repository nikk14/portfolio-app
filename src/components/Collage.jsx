import React from "react";
import { NavLink, Outlet } from "react-router";

const College = () => {
  return (
    <>
      <div className="  border border-red-500 ">

        <div >
          <h1 className="text-zinc-800 font-bold">College</h1>
        </div>

        <div className=" w-full mx-auto h-full ">
         <div className="flex gap-12 bg-amber-100 mt-2 w-full h-full">
          <NavLink className="hover:bg-violet-600 focus:outline-2 p-0.5 rounded" to="students">students</NavLink>
          <NavLink className="hover:bg-violet-600" to="departments">Departments</NavLink>
          <NavLink className="hover:bg-violet-600" to="college-details">College Details</NavLink>
         </div>

          <Outlet />

        </div>

      </div>

    </>
  );
};

export default College;
