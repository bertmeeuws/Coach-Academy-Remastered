import { BellIcon, DocumentIcon } from "@heroicons/react/outline";
import React from "react";
import Router from "next/router";
import ProfileDropdown from "../Dropdown/ProfileDropdown";
import NotificationPopover from "../Dropdown/NotificationPopover";
import DocumentsDropdown from "../Dropdown/DocumentsDropdown";

interface IProps {
  page: string;
}

export default function Header({ page }: IProps) {
  return (
    <div className="p-6">
      <div className="px-2 border-b-2 py-3 flex items-center justify-between">
        <h1 className="text-darkBlue text-2xl font-bold">{page}</h1>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 relative">
            <div className="absolute -right-1 -top-1 bg-fluoGreen rounded-full w-4 h-4 flex items-center justify-center pointer-events-none">
              <span className="leading-1 text-white text-xs font-semibold">
                5
              </span>
            </div>
            <NotificationPopover>
              <BellIcon className="w-8 h-8 cursor-pointer text-gray-600 hover:text-fluoGreen" />
            </NotificationPopover>
          </div>
          <div className="w-8 h-8 relative">
            <div className="absolute -right-1 -top-1 bg-fluoGreen rounded-full w-4 h-4 flex items-center justify-center pointer-events-none">
              <span className="leading-1 text-white text-xs font-semibold">
                1
              </span>
            </div>
            <DocumentsDropdown>
              <DocumentIcon className="w-8 h-8 cursor-pointer text-gray-600 hover:text-fluoGreen" />
            </DocumentsDropdown>
          </div>
          <ProfileDropdown>
            <div className="flex items-center border-l-2 pl-4 space-x-2 cursor-pointer">
              <div className="w-10 h-10 bg-red-400 rounded-full flex-shrink-0 "></div>
              <p className="">
                <span className="font-bold text-darkBlue">Coach</span>
                <span className="font-bold text-fluoGreen"> Bert</span>
              </p>
            </div>
          </ProfileDropdown>
        </div>
      </div>
    </div>
  );
}
