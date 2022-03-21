import { XIcon } from "@heroicons/react/solid";
import React from "react";
import { WORKOUT_ITEM } from "../../types/workout";

const WorkoutTableItem: React.FC<WORKOUT_ITEM> = ({
  name,
  sets,
  reps,
  rpe,
}) => {
  return (
    <>
      <tr className="font-semibold text-gray-800">
        <td className="flex items-center space-x-2">
          <XIcon className="h-4 w-4 cursor-pointer text-red-300" />
          <div className="h-8 w-8 rounded bg-red-500"></div>
          <p>{name}</p>
        </td>
        <td>{sets}</td>
        <td>{reps}</td>
        <td>{rpe}</td>
        <td>RECORD</td>
      </tr>
      <tr>
        <td colSpan={5}>dqdqdsqdqdqsdqsdqsdqsdqs</td>
      </tr>
    </>
  );
};

export default WorkoutTableItem;
