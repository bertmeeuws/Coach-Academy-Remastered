import { MenuIcon } from "@heroicons/react/outline";
import Head from "next/head";
import React, { Fragment, useEffect } from "react";
import ClientNav from "../../../components/Mobile/ClientNav";
import Button from "../../../ui/Button";
import MyModal from "../../../components/Modal/index";
import { gql, useClient, useMutation } from "urql";
import { GET_CLIENT_DETAILS } from "../../../graphql/clients/Query.gql";
import { profile } from "console";
import { UPDATE_CLIENT } from "../../../graphql/clients/Mutation.gql";
import { parse } from "date-fns";
import { MINIO_URL } from "../../../constants/config";
import { useAtom } from "jotai";
import { PROFILE_IMAGE, REFETCH_PROFILE_IMAGE } from "../../../store/store";

export default function index() {
  const [open, setOpen] = React.useState(false);
  const [weight, setWeight] = React.useState<undefined | number>(undefined);
  const [surname, setSurname] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [dob, setDob] = React.useState<string | Date>("");
  const [address, setAddress] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [postal, setPostal] = React.useState<string>("");
  const [profile_image, setProfile_image] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const [refetchVal, setRefetchVal] = useAtom(REFETCH_PROFILE_IMAGE);

  const client = useClient();

  useEffect(() => {
    (async function operation() {
      setLoading(true);
      const { data } = await client.query(GET_CLIENT_DETAILS).toPromise();
      if (!data.client) {
        console.log("Something went wrong");
        return;
      }
      const { surname, name, dob, address, city, phone, postal, user } =
        data?.client;

      setSurname(surname || "");
      setName(name || "");
      setDob(dob || "");
      setAddress(address || "");
      setCity(city || "");
      setPhone(phone || "");
      setProfile_image(profile_image || null);
      setPostal(postal || "");
      setProfile_image(user.profile_image);
      setLoading(false);
    })();
  }, []);

  /*
  const onChange = ({
    target: {
      validity,
      files: [file],
    },
  }) =>
    validity.valid &&
    uploadFileMutation({ variables: { file } }).then(() => {
      apolloClient.resetStore();
    });


  */

  const handleSubmitForm = async () => {
    const { data } = await client
      .mutation(UPDATE_CLIENT, {
        client: {
          surname: surname,
          name: name,
          postal: parseInt(postal),
          address: address,
          city: city,
          dob:
            typeof dob === "string"
              ? parse(dob as string, "yyyy-MM-dd", new Date())
              : dob,
          phone: phone,
          profile_image:
            profile_image instanceof File ? profile_image : undefined,
        },
      })
      .toPromise();

    setRefetchVal((val: boolean) => !val);
    setOpen(false);
  };

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
            className="border-2 border-gray-500 bg-white text-black"
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
          <div>
            <div className="mt-1 mb-8 flex items-center">
              {profile_image ? (
                <img
                  className="inline-block aspect-square h-12 w-12 rounded-full object-cover"
                  src={
                    profile_image instanceof File
                      ? URL.createObjectURL(profile_image)
                      : profile_image
                      ? `${MINIO_URL}${profile_image}`
                      : ""
                  }
                  alt=""
                />
              ) : (
                <div className="inline-block aspect-square h-12 w-12 rounded-full bg-gray-600 object-cover"></div>
              )}

              <div className="ml-4 flex">
                <div className="relative overflow-hidden rounded-md border-2 bg-white px-3 py-2">
                  <label
                    htmlFor="user-photo"
                    className="text-blue-gray-900 pointer-events-none relative cursor-pointer text-sm font-medium"
                  >
                    <span>Change</span>
                    <span className="sr-only"> user photo</span>
                  </label>
                  <input
                    accept="image/*"
                    onChange={(e) => setProfile_image(e.currentTarget.files[0])}
                    id="user-photo"
                    name="user-photo"
                    type="file"
                    className="absolute left-0 top-0 h-full w-full cursor-pointer rounded-md border-gray-300 bg-red-600 opacity-0"
                  />
                </div>
                <button
                  type="button"
                  onClick={(e) => setProfile_image(null)}
                  className="text-blue-gray-900 hover:text-blue-gray-700 focus:border-blue-gray-300 focus:ring-offset-blue-gray-50 ml-3 rounded-md border border-transparent bg-transparent py-2 px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <div className="col-span-1 overflow-hidden">
              <p className="text-xs font-semibold text-gray-600">Surname</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none "
                placeholder="Type here..."
                value={surname}
                onChange={(e) => setSurname(e.currentTarget.value)}
              />
            </div>
            <div className="col-span-1 overflow-hidden">
              <p className="text-xs font-semibold text-gray-600">Name</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none "
                placeholder="Type here..."
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </div>
            <div className="col-span-1 overflow-hidden">
              <p className="text-xs font-semibold text-gray-600">Address</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none "
                placeholder="Type here..."
                value={address}
                onChange={(e) => setAddress(e.currentTarget.value)}
              />
            </div>
            <div className="col-span-1 overflow-hidden">
              <p className="text-xs font-semibold text-gray-600">Postal</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none "
                placeholder="Type here..."
                value={postal}
                onChange={(e) => setPostal(e.currentTarget.value)}
              />
            </div>
            <div className="col-span-1 overflow-hidden">
              <p className="text-xs font-semibold text-gray-600">City</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none "
                placeholder="Type here..."
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
              />
            </div>
            <div className="col-span-1 overflow-hidden">
              <p className="text-xs font-semibold text-gray-600">Dob</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none "
                placeholder="Type here..."
                type="date"
                value={dob}
                onChange={(e) => setDob(e.currentTarget.value)}
              />
            </div>
            <div className="col-span-2">
              <p className="text-xs font-semibold text-gray-600">Phone</p>
              <input
                className="w-full border-b-2 bg-transparent pl-2 font-semibold text-darkBlue outline-none"
                placeholder="Type here..."
                value={phone}
                onChange={(e) => setPhone(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="mt-4 flex w-full justify-center space-x-3">
            <Button className="cursor-pointer bg-red-500 opacity-50 hover:opacity-100 ">
              Cancel
            </Button>
            <Button onClick={(e) => setOpen(true)}>Submit changes</Button>
          </div>
        </section>
      </ClientNav>
    </section>
  );
}
