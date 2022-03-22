import { XIcon } from "@heroicons/react/solid";
import Head from "next/head";
import React from "react";
import Exercise_list from "../../../../../components/ExerciseList";
import Header from "../../../../../components/Header/Header";
import Sidebar from "../../../../../components/Sidebar";
import WorkoutTableItem from "../../../../../components/Workout/WorkoutTableItem";
import { WORKOUT } from "../../../../../types/workout";
import Breadcrumbs from "../../../../../ui/Breadcrumbs";
import HOCSection from "../../../../../ui/HOCSection";
import Spinner from "../../../../../ui/Spinner";

export default function index() {
  const [workout, setWorkout] = React.useState<WORKOUT[]>([
    {
      id: 1,
      date: "Monday",
      name: "Push",
      exercises: [
        {
          name: "Bench press",
          id: "1",
          sets: 4,
          reps: 12,
          rpe: 8,
        },
        {
          name: "Bench press",
          id: "2",
          sets: 4,
          reps: 12,
          rpe: 8,
        },
      ],
    },
    {
      id: 1,
      date: "Tuesday",
      name: "Pull",
      exercises: [],
    },
  ]);

  return (
    <section className="">
      <Head>
        <title>Dashboard | CoachAcademy</title>
      </Head>
      <Sidebar>
        <HOCSection>
          <Header page="Client workout plan" />
          <div className="flex flex-grow flex-row">
            <div className="flex w-full flex-col space-y-3 px-4">
              {workout.map((item) => (
                <article className="rounded-md bg-white p-4 shadow-md">
                  <h2 className="text-2 xl font-semibold text-darkBlue">
                    {item.date} - {item?.name}
                  </h2>
                  <table className="w-full table-auto">
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
                      <WorkoutTableItem
                        name={"Bench press"}
                        id={"1"}
                        sets={4}
                        reps={12}
                        rpe={8}
                      />
                      <WorkoutTableItem
                        name={"Bench press"}
                        id={"1"}
                        sets={4}
                        reps={12}
                        rpe={8}
                      />
                      <WorkoutTableItem
                        name={"Bench press"}
                        id={"1"}
                        sets={4}
                        reps={12}
                        rpe={8}
                      />
                    </tbody>
                  </table>
                  <div className="my-4 flex h-24 w-full items-center justify-center border-2 border-dashed">
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
