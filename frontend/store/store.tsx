import { atom } from "jotai";
import { EXECISE_ITEM, WORKOUT } from "../types/workout";
import { uuid } from "uuidv4";

export const AUTH_STATE = atom(undefined);
export const PROFILE_IMAGE = atom(undefined);
export const REFETCH_PROFILE_IMAGE = atom(false);

export const SELECTED_EXERCISE = atom<EXECISE_ITEM | null>(null);
export const WORKOUT_STATE = atom<WORKOUT[]>([
  {
    id: 1,
    date: "Monday",
    name: "Push",
    exercises: [
      {
        name: "Bench press",
        id: "1",
        exercise_id: uuid(),
        sets: 4,
        reps: 12,
        rpe: 8,
      },
      {
        name: "Bench press",
        exercise_id: uuid(),
        id: "2",
        sets: 4,
        reps: 12,
        rpe: 8,
      },
    ],
  },
  {
    id: 2,
    date: "Tuesday",
    name: "",
    exercises: [],
  },

  {
    id: 3,
    date: "Wednesday",
    name: "",
    exercises: [],
  },
  {
    id: 4,
    date: "Thursday",
    name: "",
    exercises: [],
  },
  {
    id: 5,
    date: "Friday",
    name: "",
    exercises: [],
  },
  {
    id: 6,
    date: "Saturday",
    name: "",
    exercises: [],
  },
  {
    id: 7,
    date: "Sunday",
    name: "",
    exercises: [],
  },
]);

export const CURRENT_WORKOUT = atom<number>(1);
