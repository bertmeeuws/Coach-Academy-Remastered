import { SearchIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { useAtom } from "jotai";
import Head from "next/head";
import React from "react";
import FoodItemCatalog from "../../../../../components/Food/FoodItem";
import MealItem from "../../../../../components/Food/MealItem";
import Header from "../../../../../components/Header/Header";
import Sidebar from "../../../../../components/Sidebar";
import {
  dietState,
  ENUM_DAYS,
  selectedDay,
} from "../../../../../store/DietState";
import { IBreadcrumb } from "../../../../../types/breadcrumbs";
import { IFoodDay } from "../../../../../types/food";
import Breadcrumbs from "../../../../../ui/Breadcrumbs";
import HOCSection from "../../../../../ui/HOCSection";

export default function index() {
  const [breadcrumbs, setBreadcrumbs] = React.useState<IBreadcrumb[]>([]);
  const [activeDay, setActiveDay] = useAtom(selectedDay);

  const [DIET_STATE] = useAtom(dietState);

  React.useEffect(() => {
    generateBreadCrumbs();
  }, []);

  const generateBreadCrumbs = () => {
    setBreadcrumbs([
      {
        name: "Clients",
        href: "/dashboard/clients",
      },
      {
        name: "Profile",
        //@TODO make dynamic
        href: "/dashboard/clients/123",
      },
      {
        name: "Diet plan",
        //@TODO make dynamic
        href: "/dashboard/clients/123",
      },
    ]);
  };

  return (
    <section className="">
      <Head>
        <title>Food plan | CoachAcademy</title>
      </Head>
      <Sidebar>
        <HOCSection>
          <Header page="Client diet plan" />
          <div className="flex flex-grow flex-col px-6">
            <Breadcrumbs data={breadcrumbs} />
            <div className="my-8 flex space-x-10">
              <div className="h-14 w-14 flex-shrink-0 rounded-full bg-gray-600"></div>
              <div className="grid grid-cols-4 gap-x-10 gap-y-4">
                <div className="col-span-1">
                  <p className="text-gray-600">Client</p>
                  <p className="text-lg font-semibold text-gray-800">
                    Bert Meeuws
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-gray-600">Profession</p>
                  <p className="font-semibold text-gray-800">Programmer</p>
                </div>
                <div className="col-span-1">
                  <p className="text-gray-600">Competition</p>
                  <p className="font-semibold text-gray-800">N/A</p>
                </div>
                <div className="col-span-1">
                  <p className="text-gray-600">Weight</p>
                  <p className="font-semibold text-gray-800">89.9kg</p>
                </div>
                <div className="col-span-1">
                  <p className="text-gray-600">Length</p>
                  <p className="font-semibold text-gray-800">89.9kg</p>
                </div>
                <div className="col-span-1">
                  <p className="text-gray-600">Injuries</p>
                  <p className="font-semibold text-gray-800">
                    No existing injuries
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div>
                <div className="my-4 flex items-center space-x-2 overflow-x-auto scrollbar-hide">
                  {Object.values(ENUM_DAYS).map((day) => (
                    <button
                      onClick={(e) => setActiveDay(day)}
                      key={day}
                      className={classNames(
                        "rounded px-[18px] py-[5px] font-bold text-gray-500",
                        {
                          "bg-fluoGreen text-white shadow-md":
                            activeDay === day,
                        },
                        {
                          "bg-white text-gray-500 shadow-fluoGreen transition-all duration-100 hover:bg-fluoGreen hover:text-white":
                            activeDay !== day,
                        }
                      )}
                      type="button"
                      value="Monday"
                    >
                      {day}
                    </button>
                  ))}
                </div>
                <div className="h-[70vh] space-y-3 overflow-y-auto pb-4 pr-4">
                  {DIET_STATE.find((i) => i.name === activeDay)?.meals.map(
                    (k, idx) => (
                      <MealItem key={idx} data={k} id={k.id} />
                    )
                  )}
                </div>
              </div>
              <div className="h-[70vh] w-[350px] overflow-auto rounded-lg bg-white pr-2 shadow scrollbar-hide">
                <div className="fixed bg-ghost pb-4">
                  <div className="mx-4 mt-4 flex w-full space-x-3 rounded-lg bg-fluoGreen py-[12px] px-[18px]">
                    <SearchIcon className="z-20 h-5 w-5 flex-shrink-0 text-white" />
                    <input
                      className="bg-transparent text-white placeholder-white outline-none"
                      placeholder="Seach foods"
                    />
                  </div>
                </div>
                <div className="pt-20">
                  <p className="my-4 px-6 font-semibold text-gray-400">Chest</p>
                  <div className="space-y-4 px-2">
                    <FoodItemCatalog />
                    <FoodItemCatalog />
                    <FoodItemCatalog />
                  </div>
                  <p className="my-4 px-6 font-semibold text-gray-400">Legs</p>
                  <div className="space-y-4 px-2">
                    <FoodItemCatalog />
                    <FoodItemCatalog />
                    <FoodItemCatalog />
                  </div>
                  <p className="my-4 px-6 font-semibold text-gray-400">Legs</p>
                  <div className="space-y-4 px-2">
                    <FoodItemCatalog />
                    <FoodItemCatalog />
                    <FoodItemCatalog />
                  </div>
                  <p className="my-4 px-6 font-semibold text-gray-400">Legs</p>
                  <div className="space-y-4 px-2">
                    <FoodItemCatalog />
                    <FoodItemCatalog />
                    <FoodItemCatalog />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HOCSection>
      </Sidebar>
    </section>
  );
}
