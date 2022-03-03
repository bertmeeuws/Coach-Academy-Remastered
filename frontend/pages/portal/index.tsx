import { MenuIcon } from "@heroicons/react/outline";
import Head from "next/head";
import React, { Fragment } from "react";
import DietThumbnail from "../../components/DietThumbnail/DietThumbnail";
import ClientNav from "../../components/Mobile/ClientNav";
import ListItem from "../../components/Survey/ListItem";
import WorkoutSmallTable from "../../components/WorkoutSmallTable/WorkoutSmallTable";

export interface ISurveyData {
  name: string;
  score: number | undefined;
}

export default function index() {
  const [open, setOpen] = React.useState(true);
  const [weight, setWeight] = React.useState<undefined | number>(undefined);

  const surveyData = [
    {
      name: "Cravings",
      score: undefined,
    },
    {
      name: "Energy during the day",
      score: undefined,
    },
    {
      name: "Energy during workout",
      score: undefined,
    },
  ];

  const dietPlan = [
    {
      day: "",
      calories: 3000,
      protein: 200,
      fat: 90,
      carbs: 300,
    },
    {
      day: "",
      calories: 3000,
      protein: 200,
      fat: 90,
      carbs: 300,
    },
    {
      day: "",
      calories: 3000,
      protein: 200,
      fat: 90,
      carbs: 300,
    },
  ];

  const [survey, setSurvey] = React.useState<ISurveyData[]>(surveyData);

  const setSurveyValue = (name: string, value: number) => {
    setSurvey([
      ...survey.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            score: value,
          };
        }
        return {
          ...item,
        };
      }),
    ]);
  };

  return (
    <section className="min-h-screen bg-ghost pb-2">
      <Head>
        <title>Dashboard - Portal</title>
      </Head>
      <ClientNav>
        <div className="mt-4 px-4">
          <h1 className="text-4xl font-bold text-darkBlue">Hi Bert,</h1>
          <p className="text-2xl font-semibold text-gray-700">
            Ready to achieve your goals?
          </p>
          <div className="my-8">
            <div className="relative h-48 w-full rounded bg-fluoGreen p-4">
              <h2 className="mb-4 text-2xl font-bold text-white">
                How much do you weigh today?
              </h2>
              <div className="absolute left-4 bottom-4 flex items-end space-x-3">
                <input
                  value={weight}
                  onChange={(e: any) => setWeight(e.currentTarget.value)}
                  className="a w-36 border-b-2 bg-transparent text-6xl font-bold text-white placeholder-white outline-none"
                  placeholder="..."
                />
                <p className="text-2xl font-bold text-white">Kg</p>
              </div>
              <button className="absolute right-4 bottom-4 rounded bg-white px-4 py-2 font-semibold text-darkBlue">
                Save
              </button>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-darkBlue">
              How are you feeling today?
            </h2>
            <div className="my-4 flex w-full flex-col space-y-6 rounded-lg bg-white p-8 shadow">
              {survey.map((i) => (
                <ListItem
                  setValue={(number: number) => setSurveyValue(i.name, number)}
                  key={i.name}
                  data={i}
                />
              ))}
            </div>
          </div>
          <div className="my-8">
            <h2 className="mb-4 text-2xl font-semibold text-darkBlue">
              Today's workout
            </h2>
            <div className="my-4 flex w-full flex-col space-y-6 rounded-lg bg-white shadow">
              <WorkoutSmallTable />
            </div>
          </div>
        </div>
        <div className="my-8">
          <h2 className="mb-4 px-4 text-2xl font-semibold text-darkBlue">
            Today's diet
          </h2>
          <div className="my-4 flex w-full  flex-row space-x-3 overflow-x-auto px-4">
            {dietPlan.map((k) => (
              <DietThumbnail key={k.day} data={k} />
            ))}
          </div>
        </div>
      </ClientNav>
    </section>
  );
}
