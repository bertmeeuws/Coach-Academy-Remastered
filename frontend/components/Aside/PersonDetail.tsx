import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import React from "react";

export default function PersonDetail() {
  return (
    <div className="w-[300px] rounded-lg flex flex-col items-center bg-white h-full">
      <div className="bg-fluoGreen w-full h-[150px] rounded-t-lg rounded-b-[75px] flex relative justify-center">
        <div className="w-[150px] h-[150px] bg-white rounded-full border-4 absolute -bottom-10 shadow-md"></div>
      </div>
      <div className="mt-14 text-center">
        <p className="font-bold text-darkBlue">Maxime Vercruysse</p>
        <p className="text-gray-600">20/06/1995</p>
      </div>
      <div className="py-8 flex flex-col space-y-6">
        <div className="flex flex-col justify-start">
          <p className="uppercase text-gray-600 text-xs font-medium mb-2">
            ADDRESS
          </p>
          <p>Potagierstraat</p>
        </div>
        <div className="flex space-x-6">
          <div className="flex flex-col justify-start">
            <p className="uppercase text-gray-600 text-xs font-medium mb-2">
              POSTAL
            </p>
            <p>Potagierstraat</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="uppercase text-gray-600 text-xs font-medium mb-2">
              CITY
            </p>
            <p>Potagierstraat</p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <p className="uppercase text-gray-600 text-xs font-medium mb-2">
            AGE
          </p>
          <p>20 years old</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="uppercase text-gray-600 text-xs font-medium mb-2">
            CONTACT INFORMATION
          </p>
          <div className="flex space-x-2">
            <PhoneIcon className="w-5 h-5 text-gray-600" />
            <p>email@email.com</p>
          </div>
          <div className="flex space-x-2">
            <MailIcon className="w-5 h-5 text-gray-600" />
            <p>04 911 444 29</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2 pt-8">
          <p className="bg-fluoGreen flex-grow w-full text-center text-white cursor-pointer font-medium py-2 px-3 rounded-lg">
            View client
          </p>
          <p className="text-xs font-medium py-2 px-3 rounded-lg underline cursor-pointer">
            Change status
          </p>
        </div>
      </div>
    </div>
  );
}
