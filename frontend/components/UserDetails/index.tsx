import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import React, { Suspense, useEffect } from "react";
import { useClient, useQuery } from "urql";
import { GET_COACH_DETAILS } from "../../graphql/coach/Query.gql";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import Dropzone, { useDropzone } from "react-dropzone";

export default function index({ className }: any) {
  const client = useClient();
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [avatar, setAvatar] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  const [result, execute] = useQuery({
    query: GET_COACH_DETAILS,
    variables: {
      coachId: 9999,
    },
    pause: true,
  });

  useEffect(() => {
    (async function getDetails() {
      const { data } = await client
        .query(GET_COACH_DETAILS, {
          coachId: 999,
        })
        .toPromise();
      const { name, surname } = data.coach;
      const { email, profile_image } = data.coach.user;
      setName(name);
      setSurname(surname);
      setAvatar(avatar);
      setEmail(email);
      setLoading(false);
    })();
  }, []);

  const saveDetails = async () => {};

  const onDrop = React.useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      {loading ? (
        <div className="flex h-[80vh] w-full items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div
          className={classNames("space-y-6 sm:px-6 lg:col-span-9 lg:px-0", {})}
        >
          <section aria-labelledby="payment-details-heading">
            <form action="#" method="POST">
              <div className="sm:overflow-hidden sm:rounded-md">
                <div className="bg-white py-6 px-4 sm:p-6">
                  <div>
                    <h2
                      id="payment-details-heading"
                      className="text-lg font-semibold leading-6 text-gray-700"
                    >
                      Personal settings
                    </h2>
                    <p className="mt-1 border-b-2 pb-4 text-sm text-gray-500 ">
                      Change your profile settings here so your clients are up
                      to date with your information
                    </p>
                  </div>
                  <div
                    className="my-3 rounded-lg border-2 border-dashed p-4 text-center font-medium text-gray-800"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    )}
                  </div>

                  <div className="my-4 sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
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
                        <div className="border-blue-gray-300 hover:bg-blue-gray-50 focus-within:ring-offset-blue-gray-50 relative flex cursor-pointer items-center  rounded-md border bg-white py-2 px-3 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
                          <label
                            htmlFor="user-photo"
                            className="text-blue-gray-900 pointer-events-none relative text-sm font-semibold"
                          >
                            <span>Change</span>
                            <span className="sr-only"> user photo</span>
                          </label>
                          <input
                            id="user-photo"
                            name="user-photo"
                            type="file"
                            className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                          />
                        </div>
                        <button
                          type="button"
                          className="text-blue-gray-900 hover:text-blue-gray-700 focus:border-blue-gray-300 focus:ring-offset-blue-gray-50 ml-3 rounded-md border border-transparent bg-transparent py-2 px-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
                        className="block text-sm font-semibold text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="cc-given-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2  px-3  focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        value={surname}
                        onChange={(e) => setSurname(e.currentTarget.value)}
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="cc-family-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border border-gray-300  py-2 px-3 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-1">
                      <label
                        htmlFor="expiration-date"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Company name
                      </label>
                      <input
                        type="text"
                        name="expiration-date"
                        id="expiration-date"
                        autoComplete="cc-exp"
                        className="mt-1 block w-full rounded-md border border-gray-300  py-2 px-3 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                        placeholder=""
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-1">
                      <label
                        htmlFor="security-code"
                        className="flex items-center text-sm font-semibold text-gray-700"
                      >
                        <span>Phone</span>
                      </label>
                      <input
                        type="text"
                        name="security-code"
                        id="security-code"
                        autoComplete="cc-csc"
                        className="mt-1 block w-full rounded-md border border-gray-300  py-2 px-3 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Street
                      </label>
                      <input
                        type="text"
                        name="security-code"
                        id="security-code"
                        autoComplete="cc-csc"
                        className="mt-1 block w-full rounded-md border border-gray-300  py-2 px-3 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <Button>Save setting</Button>
                </div>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
