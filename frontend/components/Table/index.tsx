import { UserIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { MINIO_URL } from "../../constants/config";
import UserProfileImage from "../UserProfileImage";

export default function Table({ data, setSelectedClient }: any) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle  sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    CLIENT NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
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
                      "my-4 cursor-pointer rounded-lg transition-all duration-100 hover:bg-gray-100",
                      {
                        "bg-gray-50": idx % 2 === 0,
                        "bg-white": idx % 2 !== 0,
                      }
                    )}
                    key={idx}
                  >
                    <td className="flex items-center whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-800">
                      <UserProfileImage
                        profile_image={person.user.profile_image}
                      />
                      {person.name} {person.surname}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-500">
                      dsqdd
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <p
                        onClick={(e) => setSelectedClient(person.id)}
                        className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data?.clients.length === 0 && (
              <div className="mt-16 flex w-full justify-center">
                <p className="font-semibold text-gray-600">No clients found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
