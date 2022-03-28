import { XIcon } from "@heroicons/react/solid";
import { useAtom, useAtomValue } from "jotai";
import Head from "next/head";
import React from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Exercise_list from "../../../../../components/ExerciseList";
import Header from "../../../../../components/Header/Header";
import Sidebar from "../../../../../components/Sidebar";
import WorkoutTableItem from "../../../../../components/Workout/WorkoutTableItem";
import {
  CURRENT_WORKOUT,
  SELECTED_EXERCISE,
  WORKOUT_STATE,
} from "../../../../../store/store";
import { WORKOUT } from "../../../../../types/workout";
import Breadcrumbs from "../../../../../ui/Breadcrumbs";
import HOCSection from "../../../../../ui/HOCSection";
import Spinner from "../../../../../ui/Spinner";
import { uuid } from "uuidv4";
import classNames from "classnames";

export default function index() {
  const [workout, setWorkout] = useAtom(WORKOUT_STATE);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: () => alert("dsqds"),
    collect: (monitor: any) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [currentExercise, setCurrentExercise] = useAtom(SELECTED_EXERCISE);
  const [currentWorkout, setCurrentWorkout] = useAtom(CURRENT_WORKOUT);

  const addExerciseToList = (id: number) => {
    if (!currentExercise) return;

    setWorkout((prev: WORKOUT[]) => {
      const val = prev.map((i: WORKOUT) => {
        if (i.id === id) {
          const clone: WORKOUT = i;
          clone.exercises.push({
            name: currentExercise.name as string,
            exercise_id: currentExercise.id,
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

  const setName = (value: string) => {
    setWorkout((prev: WORKOUT[]) => {
      const val = prev.map((i: WORKOUT) => {
        if (i.id === currentWorkout) {
          return {
            ...i,
            name: value,
          };
        }
        return i;
      });
      return val;
    });
  };

  return (
    <section className="">
      <Head>
        <title>Dashboard | CoachAcademy</title>
      </Head>
      <Sidebar>
        <HOCSection>
          <Header page="Client workout plan" />
          <div className="flex flex-grow flex-row">
            <div className="flex h-[88vh] w-full flex-col space-y-3 overflow-auto px-4 scrollbar-hide">
              {workout.map((item) => (
                <article
                  onClick={(e) => setCurrentWorkout(item.id)}
                  className={classNames(
                    "rounded-md border-2 border-transparent bg-white p-4 shadow-md transition-all duration-100 hover:border-gray-400",
                    {
                      "border-2 border-gray-400": item.id === currentWorkout,
                    }
                  )}
                >
                  <h2 className="mb-4 font-semibold text-darkBlue">
                    {item.date} -
                    <input
                      className="ml-2 border-b font-semibold"
                      placeholder="Type here"
                      value={item?.name}
                      onChange={(e) => setName(e.currentTarget.value)}
                    ></input>
                  </h2>
                  <table
                    onClick={(e) => e.stopPropagation()}
                    className="w-full table-auto"
                  >
                    <thead>
                      <tr className="text-left text-gray-600">
                        <th>EXERCISE</th>
                        <th>SETS</th>
                        <th>REPS</th>
                        <th>RPE</th>
                        <th>NOTES</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.exercises.map(
                        ({ id, name, sets, reps, rpe, exercise_id }) => (
                          <WorkoutTableItem
                            day_id={item.id}
                            exercise_id={exercise_id}
                            name={name}
                            id={id}
                            sets={sets}
                            reps={reps}
                            rpe={rpe}
                          />
                        )
                      )}
                    </tbody>
                  </table>
                  <div
                    ref={drop}
                    onClick={(e) => addExerciseToList(item.id)}
                    className="my-4 flex hidden h-24 w-full items-center justify-center border-2 border-dashed"
                  >
                    <p>Drag and drop</p>
                  </div>
                </article>
              ))}
            </div>
            <React.Suspense fallback={<Spinner />}>
              <Exercise_list />
            </React.Suspense>
          </div>
        </HOCSection>
      </Sidebar>
    </section>
  );
}
