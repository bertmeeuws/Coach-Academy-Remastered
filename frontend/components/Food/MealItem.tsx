import { XIcon } from "@heroicons/react/outline";
import React from "react";
import { IMealItem } from "../../types/food";

export default function MealItem({ id, data }: any) {
  return (
    <section className="rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-lg font-bold text-fluoGreen">Meal {id}</h2>
      <div className="mb-4 grid grid-cols-10 space-y-2">
        <p className="col-span-5 col-start-2 text-xs font-semibold text-gray-600 ">
          FOOD
        </p>
        <p className="text-xs font-semibold text-gray-600">CARBS</p>
        <p className="text-xs font-semibold text-gray-600 ">PROTEIN</p>
        <p className="text-xs font-semibold text-gray-600">FATS</p>
        <p className="text-xs font-semibold text-gray-600">NOTES</p>
        {data.items.map((k: IMealItem, idx: number) => (
          <FoodItem data={k} key={idx} />
        ))}
      </div>
      <div className="duration-50 flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed p-6 transition-all hover:border-gray-400">
        <p className="font-semibold text-gray-600">Drop meal here</p>
      </div>
    </section>
  );
}

export function FoodItem({ data }: any) {
  return (
    <>
      <XIcon className="h-6 w-6 cursor-pointer text-red-600 hover:text-red-400" />
      <p className="col-span-5 col-start-2 text-lg font-semibold text-darkBlue">
        {data.name}
      </p>
      <p className="col-span-1 text-lg font-semibold text-darkBlue">
        {data.carbs}g
      </p>
      <p className="col-span-1 text-lg font-semibold text-darkBlue">
        {data.protein}g
      </p>
      <p className="col-span-1 text-lg font-semibold text-darkBlue">
        {data.fats}g
      </p>
      <div>
        <p className="col-span-1 mr-8 inline-flex cursor-pointer rounded-full bg-[#57D3D2] px-[18px]  py-[5px] font-bold text-white transition duration-100 hover:bg-opacity-50">
          Record
        </p>
      </div>
      <p className="col-span-full col-start-2 text-gray-500">{data.notes}</p>
    </>
  );
}
