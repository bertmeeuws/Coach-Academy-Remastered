import { XIcon } from "@heroicons/react/solid";
import Head from "next/head";
import React from "react";
import Header from "../../../../../components/Header/Header";
import Sidebar from "../../../../../components/Sidebar";
import WorkoutTableItem from "../../../../../components/Workout/WorkoutTableItem";
import Breadcrumbs from "../../../../../ui/Breadcrumbs";
import HOCSection from "../../../../../ui/HOCSection";

export default function index() {
  return (
    <section className="">
      <Head>
        <title>Dashboard | CoachAcademy</title>
      </Head>
      <Sidebar>
        <HOCSection>
          <Header page="Client workout plan" />
          <div className="flex flex-grow flex-col">
            <div className="px-4">
              <h2 className="text-2 xl font-semibold text-darkBlue">
                Monday - DAY
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
            </div>
          </div>
        </HOCSection>
      </Sidebar>
    </section>
  );
}
