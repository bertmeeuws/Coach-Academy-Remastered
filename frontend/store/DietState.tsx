import { atom } from "jotai";
import { uuid } from "uuidv4";
import { IFoodDay, IMealItem } from "../types/food";
import { Maybe } from "../types/global";

export enum ENUM_DAYS {
  "Monday" = "Monday",
  "Tuesday" = "Tuesday",
  "Wednesday" = "Wednesday",
  "Thursday" = "Thursday",
  "Friday" = "Friday",
  "Saturday" = "Saturday",
  "Sunday" = "Sunday",
}

const createMeals = () => {
  let meals = [];
  for (let i = 1; i <= 8; i++) {
    meals.push({
      id: i,
      items: [
        {
          id: uuid(),
          name: "Rauw kipfilet",
          carbs: 25,
          protein: 10,
          fats: 4,
          notes: "",
          food_id: "123",
        },
        {
          id: uuid(),
          name: "Brocolli",
          carbs: 25,
          protein: 10,
          fats: 4,
          notes: "",
          food_id: "123",
        },
      ],
    });
  }
  return meals;
};

const diet_plan: IFoodDay[] = Object.values(ENUM_DAYS).map((i: string) => ({
  name: i,
  meals: [...createMeals()],
}));

export const dietState = atom(diet_plan);
export const selectedFood = atom<IMealItem | null>(null);
export const selectedMeal = atom<Maybe<number>>(1);
export const selectedDay = atom<ENUM_DAYS>(ENUM_DAYS.Monday);
