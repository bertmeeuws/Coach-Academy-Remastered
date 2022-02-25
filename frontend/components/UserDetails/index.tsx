import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import React from "react";
import Button from "../../ui/Button";

export default function index({ className }: any) {
  return (
    <div className={classNames("space-y-6 sm:px-6 lg:px-0 lg:col-span-9", {})}>
      <section aria-labelledby="payment-details-heading">
        <form action="#" method="POST">
          <div className="sm:rounded-md sm:overflow-hidden">
            <div className="bg-white py-6 px-4 sm:p-6">
              <div>
                <h2
                  id="payment-details-heading"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Personal settings
                </h2>
                <p className="mt-1 text-sm text-gray-500 border-b-2 pb-4 ">
                  Change your profile settings here so your clients are up to
                  date with your information
                </p>
              </div>
              <div className="sm:col-span-6 my-4">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Profile picture
                </label>
                <div className="mt-1 flex items-center">
                  <img
                    className="inline-block h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="ml-4 flex">
                    <div className="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md  flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
                      <label
                        htmlFor="user-photo"
                        className="relative text-sm font-medium text-blue-gray-900 pointer-events-none"
                      >
                        <span>Change</span>
                        <span className="sr-only"> user photo</span>
                      </label>
                      <input
                        id="user-photo"
                        name="user-photo"
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                      />
                    </div>
                    <button
                      type="button"
                      className="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-6">
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="cc-given-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md  py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="cc-family-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md  py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>

                <div className="col-span-4 sm:col-span-1">
                  <label
                    htmlFor="expiration-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    name="expiration-date"
                    id="expiration-date"
                    autoComplete="cc-exp"
                    className="mt-1 block w-full border border-gray-300 rounded-md  py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                    placeholder=""
                  />
                </div>
                <div className="col-span-4 sm:col-span-1">
                  <label
                    htmlFor="security-code"
                    className="flex items-center text-sm font-medium text-gray-700"
                  >
                    <span>Phone</span>
                  </label>
                  <input
                    type="text"
                    name="security-code"
                    id="security-code"
                    autoComplete="cc-csc"
                    className="mt-1 block w-full border border-gray-300 rounded-md  py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    name="security-code"
                    id="security-code"
                    autoComplete="cc-csc"
                    className="mt-1 block w-full border border-gray-300 rounded-md  py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal code
                  </label>
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <Button>Save setting</Button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
