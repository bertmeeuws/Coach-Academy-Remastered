import { MicrophoneIcon, PencilIcon, XIcon } from "@heroicons/react/solid";
import React from "react";
import { WORKOUT_STATE } from "../../store/store";
import { WORKOUT, WORKOUT_ITEM } from "../../types/workout";
import { useAtom } from "jotai";

enum EXERCISE_UNITS {
  REPS = "REPS",
  SETS = "SETS",
  RPE = "RPE",
  NOTES = "NOTES",
}

interface Props extends WORKOUT_ITEM {
  day_id: number;
}

const WorkoutTableItem: React.FC<Props> = ({
  name,
  sets,
  reps,
  rpe,
  notes,
  day_id,
  exercise_id,
  id,
}) => {
  const [workout, setWorkout] = useAtom(WORKOUT_STATE);
  const [notesFocus, setNotesFocus] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (notes === "" || !notes) return;
    setNotesFocus(true);
  }, []);

  const handleInputChange = (type: EXERCISE_UNITS, value: number | string) => {
    const valid = Object.values(EXERCISE_UNITS).includes(
      type as EXERCISE_UNITS
    );
    if (!valid) return;

    setWorkout((prev) => {
      const val = prev.map((i: WORKOUT) => {
        if (i.id === day_id) {
          let clone: WORKOUT = i;
          clone.exercises.map((exercise) => {
            if (exercise.id === id) {
              let exerciseClone = exercise as any;
              exerciseClone[type.toLowerCase()] = value;
            }
            return exercise;
          });
          return clone;
        }
        return i;
      });
      console.log(val);
      return val;
    });
  };

  const handleDelete = () => {
    setWorkout((prev) => {
      const val = prev.map((i: WORKOUT) => {
        if (i.id === day_id) {
          return {
            ...i,
            exercises: i.exercises.filter((i) => i.id !== id),
          };
        }
        return i;
      });
      return val;
    });
  };

  return (
    <>
      <tr className="font-semibold text-gray-800">
        <td className="flex items-center space-x-2">
          <XIcon
            onClick={(e) => handleDelete()}
            className="h-4 w-4 cursor-pointer text-red-300"
          />
          <div className="h-8 w-8 rounded bg-red-500"></div>
          <p>{name}</p>
        </td>
        <td>
          <input
            type={"number"}
            className="w-16"
            value={sets}
            onChange={(e) =>
              handleInputChange(
                EXERCISE_UNITS.SETS,
                Number(e.currentTarget.value)
              )
            }
          />
        </td>
        <td>
          <input
            type={"number"}
            className="w-16"
            value={reps}
            onChange={(e) =>
              handleInputChange(
                EXERCISE_UNITS.REPS,
                Number(e.currentTarget.value)
              )
            }
          />
        </td>
        <td>
          <input
            type={"number"}
            className="w-16"
            value={rpe}
            onChange={(e) =>
              handleInputChange(
                EXERCISE_UNITS.RPE,
                Number(e.currentTarget.value)
              )
            }
          />
        </td>
        <td className="flex space-x-2">
          <MicrophoneIcon className="h-5 w-5 cursor-pointer text-gray-600 hover:text-fluoGreen" />
          <p onClick={(e) => setNotesFocus(true)}>
            <PencilIcon className="h-5 w-5 cursor-pointer text-gray-600 hover:text-fluoGreen" />
          </p>
        </td>
      </tr>
      <tr>
        <td colSpan={5}>
          {notesFocus && (
            <input
              className="my-2 rounded-md border-2 p-2 text-xs"
              placeholder="Write your notes here"
              value={notes}
              onChange={(e) =>
                handleInputChange(EXERCISE_UNITS.NOTES, e.currentTarget.value)
              }
            />
          )}
        </td>
      </tr>
    </>
  );
};

export default WorkoutTableItem;
