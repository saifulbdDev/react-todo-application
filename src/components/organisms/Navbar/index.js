import { MenuIcon } from "../../../image";

import React from "react";

function index() {
  return (
    <nav>
      <div className="flex justify-between items-center shadow-md p-2">
        <h1 className="font-bold font-main text-3xl text-slate-300 ">
          <span className="text-blue-500">Todo</span>App
        </h1>
        <MenuIcon />
      </div>
    </nav>
  );
}

export default index;
