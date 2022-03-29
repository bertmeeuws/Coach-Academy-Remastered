import { XIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { useAtom } from "jotai";
import React from "react";
import { dietState, selectedDay, selectedMeal } from "../../store/DietState";
import { IFoodDay, IMealItem } from "../../types/food";

export default function MealItem({ id, data }: any) {
  const [SELECTED_MEAL_STATE, SET_SELECTED_MEAL_STATE] = useAtom(selectedMeal);

  return (
    <section
      onClick={(e) => {
        if (SELECTED_MEAL_STATE === id) {
          SET_SELECTED_MEAL_STATE(null);
          return;
        }
        SET_SELECTED_MEAL_STATE(id);
      }}
      className={classNames(
        "rounded-lg border-2 border-transparent bg-white p-6 shadow transition-all duration-150 hover:border-gray-400",
        { "border-gray-400": SELECTED_MEAL_STATE === id }
      )}
    >
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
          <FoodItem id={data.id} data={k} key={idx} />
        ))}
      </div>
      <div className="duration-50 flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed p-6 transition-all hover:border-gray-400">
        <p className="font-semibold text-gray-600">Drop meal here</p>
      </div>
    </section>
  );
}

enum FOOD_UNITS {
  CARBS = "CARBS",
  PROTEIN = "PROTEIN",
  FATS = "FATS",
}

export function FoodItem({ data, id }: any) {
  const [DIET_STATE, SET_DIET] = useAtom(dietState);
  const [SELECTED_DAY] = useAtom(selectedDay);
  const [showNotes, setShowNotes] = React.useState<boolean>(false);

  const deleteFood = () => {
    console.log(data);
  };

  const changeFoodUnit = (type: FOOD_UNITS, value: number) => {
    if (value <= 0) return;
    const valid = Object.values(FOOD_UNITS).includes(type as FOOD_UNITS);
    if (!valid) return;

    SET_DIET((prev: IFoodDay[]) => {
      const updated = prev.map((day) => {
        if (day.name === SELECTED_DAY) {
          day.meals.map((meal) => {
            if (meal.id === id) {
              return meal.items.map((item) => {
                if (item.id === data.id) {
                  let clone = item as any;
                  clone[type.toLowerCase()] = value;
                  return clone;
                }
                return item;
              });
            }
            return meal;
          });
          return day;
        }
        return day;
      });

      return [...updated];
    });
  };

  return (
    <>
      <XIcon className="h-6 w-6 cursor-pointer text-red-600 hover:text-red-400" />
      <p className="col-span-5 col-start-2 text-lg font-semibold text-darkBlue">
        {data.name}
      </p>
      <input
        type={"number"}
        value={data.carbs}
        onChange={(e) =>
          changeFoodUnit(FOOD_UNITS.CARBS, Number(e.currentTarget.value))
        }
        className="col-span-1 text-lg font-semibold text-darkBlue after:content-['g']"
      />
      <input
        type={"number"}
        value={data.protein}
        onChange={(e) =>
          changeFoodUnit(FOOD_UNITS.PROTEIN, Number(e.currentTarget.value))
        }
        className="col-span-1 text-lg font-semibold text-darkBlue after:content-['g']"
      />
      <input
        type={"number"}
        value={data.fats}
        onChange={(e) =>
          changeFoodUnit(FOOD_UNITS.FATS, Number(e.currentTarget.value))
        }
        className="col-span-1 text-lg font-semibold text-darkBlue after:content-['g']"
      />
      <div>
        <p className="col-span-1 mr-8 inline-flex cursor-pointer rounded-full bg-[#57D3D2] px-[18px]  py-[5px] font-bold text-white transition duration-100 hover:bg-opacity-50">
          Record
        </p>
      </div>
      <p className="col-span-full col-start-2 text-gray-500">{data.notes}</p>
    </>
  );
}
