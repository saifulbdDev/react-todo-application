import React from "react";
import { DotsIcon } from "../../../image";

function index({ children }) {
  return (
    <div className="bg-white rounded-md flex justify-between items-center shadow-md py-3 px-2">
      <input type="checkbox" name="" id="" className="" />
      <h1 className="font-main text-lg text-slate-600 font-semibold">
        {children}
      </h1>
      <DotsIcon/>
    </div>
  );
}

export default index;
