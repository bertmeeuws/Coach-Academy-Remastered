import { PlayIcon } from "@heroicons/react/solid";
import React from "react";
import { EXECISE_ITEM } from "../../types/workout";

interface Props {
  data: EXECISE_ITEM;
  setSelectedExercise: React.Dispatch<
    React.SetStateAction<null | EXECISE_ITEM>
  >;
}

const Exercise_item: React.FC<Props> = ({ data, setSelectedExercise }) => {
  return (
    <div className="rouned group flex cursor-pointer items-center space-x-2 p-4 px-3 shadow hover:bg-gray-100">
      <div
        onClick={(e: any) => setSelectedExercise(data)}
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
