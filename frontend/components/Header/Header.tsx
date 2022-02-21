import { BellIcon, DocumentIcon } from "@heroicons/react/outline";
import React from "react";

interface IProps {
  page: string;
}

export default function Header({ page }: IProps) {
  return (
    <div className="p-6">
      <div className="px-2 border-b-2 py-3 flex items-center justify-between">
        <h1 className="text-darkBlue text-2xl font-bold">{page}</h1>
        <div className="flex items-center space-x-4">
          <p className="font-medium">Friday, 30 October 2020</p>
          <BellIcon className="w-6 h-6 cursor-pointer" />
          <DocumentIcon className="w-6 h-6 cursor-pointer" />
          <div className="flex items-center border-l-2 pl-4 space-x-6">
            <div className="w-10 h-10 bg-red-400 rounded-full flex-shrink-0"></div>
            <p className="cursor-pointer">
              <span className="font-bold text-darkBlue">Coach</span>
              <span className="font-bold text-fluoGreen"> Bert</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
