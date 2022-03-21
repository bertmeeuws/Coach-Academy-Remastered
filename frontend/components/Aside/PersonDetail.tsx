import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { UserIcon, XCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { useRouter } from "next/router";
import { MINIO_URL } from "../../constants/config";

export default function PersonDetail({ data, setSelectedClient }: any) {
  const router = useRouter();

  const { address, city, dob, name, number, phone, postal, surname, user, id } =
    data.client;

  const redirectToUserPage = () => {
    router.push("/dashboard/clients/" + id);
  };

  return (
    <div className="relative flex h-full w-[300px] flex-col items-center rounded-lg bg-white">
      <XCircleIcon
        className="absolute right-2 top-2 z-10 h-10 w-10 cursor-pointer text-white"
        onClick={(e) => setSelectedClient(null)}
      />
      <div className="relative flex h-[150px] w-full justify-center rounded-t-lg rounded-b-[75px] bg-fluoGreen">
        <div className="absolute -bottom-10 h-[150px] w-[150px] rounded-full border-4 bg-white shadow-md">
          {user.profile_image ? (
            <img
              className="mr-4 rounded-full object-cover object-center"
              src={MINIO_URL + user.profile_image}
            />
          ) : (
            <div className="mr-4 flex h-full w-full items-center justify-center rounded-full bg-gray-200 object-cover object-center">
              <UserIcon className="h-14 w-14 text-gray-600" />
            </div>
          )}
        </div>
      </div>
      <div className="mt-14 text-center">
        <p className="font-bold text-darkBlue">
          {name} {surname}
        </p>
        <p className="text-gray-600">{dob}</p>
      </div>
      <div className="flex w-[90%] flex-col space-y-6 py-8 px-2">
        <div className="flex flex-col justify-start">
          <p className="mb-2 text-xs font-semibold uppercase text-gray-600">
            ADDRESS
          </p>
          <p className="text-xs">
            {address} {number}
          </p>
        </div>
        <div className="flex space-x-6">
          <div className="flex flex-col justify-start">
            <p className="mb-2 text-xs font-semibold uppercase text-gray-600">
              POSTAL
            </p>
            <p className="text-xs">{postal}</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="mb-2 text-xs font-semibold uppercase text-gray-600">
              CITY
            </p>
            <p className="text-xs">{city}</p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <p className="mb-2 text-xs font-semibold uppercase text-gray-600">
            AGE
          </p>
          <p className="text-xs">20 years old</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="mb-2 text-xs font-semibold uppercase text-gray-600">
            CONTACT INFORMATION
          </p>
          <div className="flex space-x-2">
            <PhoneIcon className="h-5 w-5 text-gray-600 " />
            <p className="truncate text-xs">{user.email}</p>
          </div>
          <div className="flex space-x-2">
            <MailIcon className="h-5 w-5 text-gray-600" />
            <p className="text-xs">{phone}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 pt-8">
          <p
            onClick={(e) => redirectToUserPage()}
            className="w-full flex-grow cursor-pointer rounded-lg bg-fluoGreen py-2 px-3 text-center font-semibold text-white"
          >
            View client
          </p>
          <p className="cursor-pointer rounded-lg py-2 px-3 text-xs font-semibold underline">
            Change status
          </p>
        </div>
      </div>
    </div>
  );
}
