import { PlayIcon } from "@heroicons/react/solid";
import React from "react";

export default function PlayVoiceMemo() {
  return (
    <div className="group flex cursor-pointer items-center space-x-2 rounded-full bg-fluoGreen px-2 py-1 text-white transition duration-100 hover:bg-white hover:shadow">
      <PlayIcon className="h-4 w-4 text-white group-hover:text-fluoGreen" />
      <p className="text-xs font-bold group-hover:text-gray-600">
        Start playing
      </p>
      <p className="text-xs font-bold group-hover:text-gray-600">22 sec</p>
    </div>
  );
}
