import React from "react";

export default function ListItem() {
  return (
    <div className=" my-4 flex h-36 w-full flex-col justify-center rounded-lg bg-white p-4">
      <p>Cravings</p>
      <div className="flex items-center justify-between">
        <p className="font-bold text-gray-400">none</p>
        <div className="flex cursor-pointer space-x-4">
          <div className="h-3 w-3 rounded-full bg-gray-400 hover:bg-fluoGreen"></div>
          <div className="h-3 w-3 rounded-full bg-gray-400 hover:bg-fluoGreen"></div>
          <div className="h-3 w-3 rounded-full bg-gray-400 hover:bg-fluoGreen"></div>
          <div className="h-3 w-3 rounded-full bg-gray-400 hover:bg-fluoGreen"></div>
          <div className="h-3 w-3 rounded-full bg-gray-400 hover:bg-fluoGreen"></div>
        </div>
        <p className="font-bold text-gray-400">a lot</p>
      </div>
    </div>
  );
}
