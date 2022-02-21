import { PlusIcon, SearchIcon } from "@heroicons/react/outline";
import React from "react";

export default function index() {
  return (
    <div>
      <div className="flex items-center space-x-2 my-2">
        <div className="relative flex items-center flex-grow">
          <SearchIcon className="w-6 h-6 absolute left-4 text-gray-400" />
          <input
            type="text"
            className="px-4 py-4 rounded-lg flex-grow pl-14"
            placeholder="Search names of clients"
          />
        </div>

        <div className="bg-fluoGreen flex items-center space-x-2 px-5 py-3 rounded-lg cursor-pointer">
          <PlusIcon className="text-white w-8 h-8" />
          <p className="font-bold text-white">Add</p>
        </div>
      </div>
    </div>
  );
}
