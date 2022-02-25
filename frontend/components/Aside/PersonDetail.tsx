import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { useRouter } from "next/router";

export default function PersonDetail({ data, setSelectedClient }: any) {
  const router = useRouter();

  const { address, city, dob, name, number, phone, postal, surname, user, id } =
    data.client;

  const redirectToUserPage = () => {
    router.push("/dashboard/clients/" + id);
  };

  return (
    <div className="w-[300px] rounded-lg flex flex-col items-center bg-white h-full relative">
      <XCircleIcon
        className="w-10 h-10 text-white absolute right-2 top-2 z-10 cursor-pointer"
        onClick={(e) => setSelectedClient(null)}
      />
      <div className="bg-fluoGreen w-full h-[150px] rounded-t-lg rounded-b-[75px] flex relative justify-center">
        <div className="w-[150px] h-[150px] bg-white rounded-full border-4 absolute -bottom-10 shadow-md"></div>
      </div>
      <div className="mt-14 text-center">
        <p className="font-bold text-darkBlue">
          {name} {surname}
        </p>
        <p className="text-gray-600">{dob}</p>
      </div>
      <div className="py-8 flex flex-col space-y-6 px-2 w-[90%]">
        <div className="flex flex-col justify-start">
          <p className="uppercase text-gray-600 text-xs font-semibold mb-2">
            ADDRESS
          </p>
          <p className="text-xs">
            {address} {number}
          </p>
        </div>
        <div className="flex space-x-6">
          <div className="flex flex-col justify-start">
            <p className="uppercase text-gray-600 text-xs font-semibold mb-2">
              POSTAL
            </p>
            <p className="text-xs">{postal}</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="uppercase text-gray-600 text-xs font-semibold mb-2">
              CITY
            </p>
            <p className="text-xs">{city}</p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <p className="uppercase text-gray-600 text-xs font-semibold mb-2">
            AGE
          </p>
          <p className="text-xs">20 years old</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="uppercase text-gray-600 text-xs font-semibold mb-2">
            CONTACT INFORMATION
          </p>
          <div className="flex space-x-2">
            <PhoneIcon className="w-5 h-5 text-gray-600 " />
            <p className="truncate text-xs">{user.email}</p>
          </div>
          <div className="flex space-x-2">
            <MailIcon className="w-5 h-5 text-gray-600" />
            <p className="text-xs">{phone}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2 pt-8">
          <p
            onClick={(e) => redirectToUserPage()}
            className="bg-fluoGreen flex-grow w-full text-center text-white cursor-pointer font-semibold py-2 px-3 rounded-lg"
          >
            View client
          </p>
          <p className="text-xs font-semibold py-2 px-3 rounded-lg underline cursor-pointer">
            Change status
          </p>
        </div>
      </div>
    </div>
  );
}
