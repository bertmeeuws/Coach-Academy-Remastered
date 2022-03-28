import { PlayIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { EXECISE_ITEM, WORKOUT } from "../../types/workout";
import { useDrag } from "react-dnd";
import { useAtom } from "jotai";
import {
  CURRENT_WORKOUT,
  SELECTED_EXERCISE,
  WORKOUT_STATE,
} from "../../store/store";
import { uuid } from "uuidv4";
import { Maybe } from "../../types/global";

interface Props {
  data: EXECISE_ITEM;
  setSelectedExercise: React.Dispatch<
    React.SetStateAction<null | EXECISE_ITEM>
  >;
  setOpenVideoPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Exercise_item: React.FC<Props> = ({
  data,
  setSelectedExercise,
  setOpenVideoPopup,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "",
    item: { ...data },
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [_, setCurrentExercise] = useAtom(SELECTED_EXERCISE);
  const [selectedWorkout] = useAtom(CURRENT_WORKOUT);
  const [workout, setWorkout] = useAtom(WORKOUT_STATE);

  const addExerciseToList = (id: number) => {
    setWorkout((prev: WORKOUT[]) => {
      const val = prev.map((i: WORKOUT) => {
        if (i.id === selectedWorkout) {
          const clone: WORKOUT = i;
          clone.exercises.push({
            name: data.name as string,
            exercise_id: data.id,
            id: uuid(),
            sets: 4,
            reps: 12,
            rpe: 8,
          });
        }
        return i;
      });
      return val;
    });
  };

  return (
    <div
      ref={drag}
      onClick={(e) => {
        setCurrentExercise(data);
        addExerciseToList(5);
      }}
      className="group flex cursor-pointer items-center space-x-2 rounded p-4 px-3 shadow hover:bg-gray-100"
    >
      <div
        onClick={(e: any) => {
          e.stopPropagation();
          setSelectedExercise(data);
          setOpenVideoPopup(true);
        }}
        className="flex h-12 w-12 items-center justify-center rounded-md bg-red-400"
      >
        <PlayIcon className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="font-semibold text-gray-800">{data.name}</p>
        <p className="text-xs font-semibold lowercase text-gray-500">
          {data.primary_muscle}
        </p>
      </div>
    </div>
  );
};

export default Exercise_item;
