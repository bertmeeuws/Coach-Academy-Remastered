import React, { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import {
  AdjustmentsIcon,
  HomeIcon,
  LogoutIcon,
  MenuIcon,
  UserIcon,
} from "@heroicons/react/solid";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { format } from "date-fns";
import { useMutation } from "urql";
import { LOG_USER_OUT } from "../../graphql/auth/Mutation.gql";
import { getImageSize } from "next/dist/server/image-optimizer";
import { useClient } from "urql";
import { GET_CLIENT_PROFILE } from "../../graphql/clients/Query.gql";
import { MINIO_URL } from "../../constants/config";
import Spinner from "../../ui/Spinner";
import { atom, useAtom } from "jotai";
import { PROFILE_IMAGE, REFETCH_PROFILE_IMAGE } from "../../store/store";

export default function ClientNav({ children }: any) {
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const navigation = [
    { name: "Dashboard", href: "/portal", icon: HomeIcon, current: true },
    {
      name: "Workout",
      href: "/portal/workout",
      icon: HomeIcon,
      current: false,
    },
    { name: "Diet plan", href: "/portal/diet", icon: HomeIcon, current: false },
    {
      name: "Settings",
      href: "/portal/settings",
      icon: AdjustmentsIcon,
      current: false,
    },
  ];

  const [logoutResult, executeLogout] = useMutation<any>(LOG_USER_OUT);

  return (
    <div>
      <nav className="flex items-center justify-between p-4">
        <MenuIcon
          onClick={(e) => setSidebarOpen(true)}
          className="h-10 w-10 text-darkBlue"
        />
        <p className="font-semibold text-darkBlue">
          {format(new Date(), "cccc, d MMMM y")}
        </p>
        <Avatar />
      </nav>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-ghost pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4">
                <img src="/svg/logo.svg" />
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="h-full px-2">
                  <div className="relative h-full space-y-1">
                    {navigation.map((item) => (
                      <Link passHref href={item.href}>
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-fluoGreen text-white"
                              : "text-gray-800 hover:bg-gray-700 hover:text-white",
                            "group flex items-center rounded-md px-2 py-2 text-base font-semibold"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-300"
                                : "text-gray-400 group-hover:text-gray-300",
                              "mr-4 h-6 w-6 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    <div className="absolute bottom-12">
                      <div
                        onClick={async (e) => {
                          await executeLogout();
                          router.push("/auth/login");
                        }}
                        className={classNames(
                          " hover:bg-fluoGreen hover:text-white",
                          "group flex items-center rounded-md px-2 py-2 text-base font-semibold"
                        )}
                      >
                        <LogoutIcon className="mr-4 h-6 w-6 text-gray-400" />
                        <p className="text-gray-800">Sign out</p>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      <section>{children}</section>
    </div>
  );
}

export const count = atom(0);

export function Avatar() {
  const client = useClient();

  const [img, setImg] = useAtom(PROFILE_IMAGE);
  const [refetch] = useAtom(REFETCH_PROFILE_IMAGE);

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    console.log("RERUN");
    setLoading(true);
    (async function getImageSize() {
      const { data } = await client
        .query(GET_CLIENT_PROFILE, {}, { requestPolicy: "network-only" })
        .toPromise();
      const profile_image = data?.client?.user?.profile_image;
      setImg(profile_image);
    })();
    setLoading(false);
  }, [refetch]);

  if (loading)
    return (
      <div className="flex h-12 w-12 items-center justify-center">
        <Spinner />;
      </div>
    );

  return img ? (
    <div
      className={classNames(
        "flex h-12 w-12 items-center justify-center overflow-hidden rounded-full"
      )}
    >
      <img className="h-12 object-cover object-center" src={MINIO_URL + img} />
    </div>
  ) : (
    <div className="flex h-12 w-12 items-center justify-center  rounded-full bg-gray-200">
      <UserIcon className="h-6 w-6" />
    </div>
  );
}
