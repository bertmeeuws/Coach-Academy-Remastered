import React from "react";

export default function WorkoutSmallTable() {
  const people = [
    {
      name: "Bent over rows",
      title: "5",
      role: "18",
      email: "5",
    },
    {
      name: "Bent over rows",
      title: "5",
      role: "18",
      email: "5",
    },
    {
      name: "Bent over rows",
      title: "5",
      role: "18",
      email: "5",
    },
    // More people...
  ];
  return (
    <div className="flex flex-col rounded-lg">
      <div className="-my-2 overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b shadow sm:rounded-lg">
            <table className="min-w-full divide-y ">
              <thead className="border-none">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-bold tracking-wider text-fluoGreen"
                  >
                    Pull day
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-bold tracking-wider text-gray-800"
                  >
                    Sets
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-bold tracking-wider text-gray-800"
                  >
                    Reps
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap px-6 py-2 text-sm font-semibold text-gray-900">
                      {person.name}
                    </td>
                    <td className="text-semibold whitespace-nowrap px-6 py-4 text-gray-500">
                      {person.title}
                    </td>
                    <td className="text-semibold whitespace-nowrap px-6 py-4 text-gray-500">
                      {person.title}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
