import { MenuIcon } from "@heroicons/react/outline";
import Head from "next/head";
import React, { Fragment } from "react";
import ClientNav from "../../../components/Mobile/ClientNav";
import Button from "../../../ui/Button";
import MyModal from "../../../components/Modal/index";

export default function index() {
  const [open, setOpen] = React.useState(false);
  const [weight, setWeight] = React.useState<undefined | number>(undefined);

  const handleSubmitForm = async () => {};

  return (
    <section className="min-h-screen bg-ghost pb-2">
      <Head>
        <title>Dashboard - Portal</title>
      </Head>
      <MyModal isOpen={open} setIsOpen={setOpen} title="Gegevens opslaan?">
        <p>Bent u zeker dat u de gegevens wilt opslaan?</p>
        <div className="mt-8 flex justify-center space-x-2">
          <Button
            onClick={(e: any) => setOpen(false)}
            className="border-2 border-gray-400 bg-white text-black"
          >
            Annuleren
          </Button>
          <Button onClick={(e: any) => handleSubmitForm()}>Opslaan</Button>
        </div>
      </MyModal>
      <ClientNav>
        <div className="mt-4 px-4">
          <h1 className="text-4xl font-bold text-darkBlue">
            Edit your profile
          </h1>
          <p className="mt-2 text-lg font-semibold text-gray-600">
            Has some of your information changed?
            <br />
            Let the coach know
          </p>
        </div>
        <section className="mt-8 overflow-hidden px-4">
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <div className="col-span-1 overflow-hidden">
              <p className="text-xs font-semibold text-gray-600">Surname</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none "
                placeholder="Type here..."
              />
            </div>
            <div className="col-span-1 overflow-hidden">
              <p className="text-xs font-semibold text-gray-600">Name</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none "
                placeholder="Type here..."
              />
            </div>
            <div className="col-span-1 overflow-hidden">
              <p className="text-xs font-semibold text-gray-600">Address</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none "
                placeholder="Type here..."
              />
            </div>
            <div className="col-span-1 overflow-hidden">
              <p className="text-xs font-semibold text-gray-600">Postal</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none "
                placeholder="Type here..."
              />
            </div>
            <div className="col-span-1 overflow-hidden">
              <p className="text-xs font-semibold text-gray-600">City</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none "
                placeholder="Type here..."
              />
            </div>
            <div className="col-span-1 overflow-hidden">
              <p className="text-xs font-semibold text-gray-600">Dob</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none "
                placeholder="Type here..."
              />
            </div>
            <div className="col-span-2">
              <p className="text-xs font-semibold text-gray-600">Phone</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none"
                placeholder="Type here..."
              />
            </div>
          </div>
          <div className="mt-4 flex w-full justify-center space-x-3">
            <Button className="cursor-pointer bg-red-500 opacity-50 hover:opacity-100">
              Cancel
            </Button>
            <Button onClick={(e) => setOpen(true)}>Submit changes</Button>
          </div>
        </section>
      </ClientNav>
    </section>
  );
}
