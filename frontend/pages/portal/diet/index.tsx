import Head from "next/head";
import React from "react";
import ClientNav from "../../../components/Mobile/ClientNav";
import { add, format } from "date-fns";
import classNames from "classnames";

export default function index() {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  const calculateDate = (plus: number) => {
    const date = add(new Date(), {
      days: plus,
    });

    return date;
  };

  const fakeArray = ["", "", "", "", "", "", ""];

  return (
    <section className="min-h-screen bg-ghost pb-2">
      <Head>
        <title>Diet - Portal</title>
      </Head>
      <ClientNav>
        <div className="mt-4 px-4">
          <h1 className="text-4xl font-bold text-darkBlue">Mealplan</h1>
          <p className="text-xl font-semibold text-fluoGreen">
            View your mealplan for this week
          </p>
          <div className="mt-8 border-t-2 border-b-2 py-4 px-3">
            <div className="flex justify-between">
              {fakeArray.map((i, idx) => (
                <div
                  key={idx}
                  onClick={(e) => setSelectedDate(calculateDate(idx))}
                  className="group flex cursor-pointer flex-col items-center space-y-2"
                >
                  <div
                    className={classNames(
                      "h-2 w-2 rounded-full group-hover:bg-fluoGreen",
                      {
                        "bg-fluoGreen":
                          calculateDate(idx).toLocaleDateString("nl-be") ===
                          selectedDate.toLocaleDateString("nl-be"),
                      },
                      {
                        "bg-gray-600":
                          calculateDate(idx).toLocaleDateString("nl-be") !==
                          selectedDate.toLocaleDateString("nl-be"),
                      }
                    )}
                  ></div>
                  <span
                    className={classNames(
                      "text-xs font-bold group-hover:text-fluoGreen",
                      {
                        "text-fluoGreen":
                          calculateDate(idx).toLocaleDateString("nl-be") ===
                          selectedDate.toLocaleDateString("nl-be"),
                      },
                      {
                        "text-gray-600":
                          calculateDate(idx).toLocaleDateString("nl-be") !==
                          selectedDate.toLocaleDateString("nl-be"),
                      }
                    )}
                  >
                    {idx === 0 ? "Today" : format(calculateDate(idx), "d MMM")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ClientNav>
    </section>
  );
}
