import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import React from "react";
import { IBreadcrumb } from "../types/breadcrumbs";

export default function Breadcrumbs({ data }: any) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {data.map((page: IBreadcrumb) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <a
                href={page.href}
                className="ml-4 text-sm  font-semibold text-gray-400 hover:text-gray-500"
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
