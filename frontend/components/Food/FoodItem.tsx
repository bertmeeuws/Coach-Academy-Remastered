import React from "react";

export default function FoodItemCatalog() {
  return (
    <div className="flex h-[80px] w-full cursor-pointer space-x-3 rounded-lg px-4 py-3 hover:bg-gray-50">
      <div className="aspect-square h-full rounded bg-gray-200"></div>
      <div className="flex flex-col justify-between">
        <p className="text-lg font-bold text-darkBlue">Rauw kipfilet</p>
        <div className="flex space-x-3 font-bold text-gray-400">
          <span>1C</span>
          <span>22P</span>
          <span>2F</span>
        </div>
      </div>
    </div>
  );
}
