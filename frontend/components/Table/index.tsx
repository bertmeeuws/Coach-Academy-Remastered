import classNames from "classnames";

export default function Table({ data, setSelectedClient }: any) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full  sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    CLIENT NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    STATUS
                  </th>

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody className="w-full">
                {data?.clients?.map((person: any, idx: number) => (
                  <tr
                    onClick={(e) => setSelectedClient(person.id)}
                    className={classNames(
                      "rounded-lg my-4 cursor-pointer hover:bg-gray-100 transition-all duration-100",
                      {
                        "bg-gray-50": idx % 2 === 0,
                        "bg-white": idx % 2 !== 0,
                      }
                    )}
                    key={idx}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">
                      {person.name} {person.surname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                      dsqdd
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <p
                        onClick={(e) => setSelectedClient(person.id)}
                        className="text-indigo-600 hover:text-indigo-900 cursor-pointer font-semibold"
                      >
                        Edit
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data?.clients.length === 0 && (
              <div className="flex justify-center w-full mt-16">
                <p className="font-semibold text-gray-600">No clients found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
