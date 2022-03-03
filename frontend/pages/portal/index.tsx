import { MenuIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";
import ClientNav from "../../components/Mobile/ClientNav";
import ListItem from "../../components/Survey/ListItem";

export default function index() {
  const [open, setOpen] = React.useState(true);
  const [weight, setWeight] = React.useState<undefined | number>(undefined);

  const survey = [
    {
      name: "Cravings",
    },
    {
      name: "Energy during the day",
    },
    {
      name: "Energy during workout",
    },
  ];

  const setSurveyValue = () => {};

  return (
    <section>
      <ClientNav>
        <div className="mt-4 px-4">
          <h1 className="text-4xl font-bold text-darkBlue">Hi Bert,</h1>
          <p className="text-2xl font-semibold text-gray-700">
            Ready to achieve your goals?
          </p>
          <div className="my-8">
            <div className="relative h-48 w-full rounded bg-fluoGreen p-4">
              <h2 className="mb-4 text-2xl font-semibold text-white">
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
            <div className="my-4 flex w-full flex-col space-y-6 rounded-lg bg-ghost p-8 shadow-md">
              {survey.map((i) => (
                <ListItem key={i.name} data={i} />
              ))}
            </div>
          </div>
        </div>
      </ClientNav>
    </section>
  );
}
