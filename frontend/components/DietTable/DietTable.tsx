import React from "react";
import PlayVoiceMemo from "../Audio/PlayVoiceMemo";

export default function WorkoutSmallTable() {
  const people = [
    {
      name: "Rauw kipfilet",
      title: "5",
      role: "18",
      email: "5",
    },
    {
      name: "Rauw kipfilet",
      title: "5",
      role: "18",
      email: "5",
    },
    {
      name: "Rauw kipfilet",
      title: "5",
      role: "18",
      email: "5",
    },
    // More people...
  ];
  return (
    <div className="flex flex-col rounded-lg">
      <div className="-my-2 overflow-hidden">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b sm:rounded-lg">
            <table className="min-w-full divide-y overflow-hidden rounded-lg border-none">
              <thead className="border-none">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-bold tracking-wider text-gray-600"
                  >
                    FOOD
                  </th>

                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-bold tracking-wider text-gray-600"
                  >
                    CARBS
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-bold tracking-wider text-gray-600"
                  >
                    PROTEINS
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-bold tracking-wider text-gray-600"
                  >
                    FAT
                  </th>
                </tr>
              </thead>
              <tbody className=" overflow-hidden rounded-lg border-none">
                {people.map((person, idx) => (
                  <>
                    <tr className="rounded-lg" key={idx}>
                      <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-gray-800">
                        {person.name}
                      </td>
                      <td className="text-semibold whitespace-nowrap px-2 py-4 text-gray-800">
                        {person.title}
                      </td>
                      <td className="text-semibold whitespace-nowrap px-2 py-4 text-gray-800">
                        {person.title}
                      </td>
                      <td className="text-semibold whitespace-nowrap px-2 py-4 text-gray-800">
                        {person.title}
                      </td>
                    </tr>
                    <tr className="">
                      <td
                        className="inline-block max-w-full truncate"
                        colSpan={4}
                      >
                        <PlayVoiceMemo />
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
