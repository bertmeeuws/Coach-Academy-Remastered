/* This example requires Tailwind CSS v2.0+ */
import { Children, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  AdjustmentsIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  DocumentIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  TemplateIcon,
  UserGroupIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { useMutation } from "urql";
import { LOG_USER_OUT } from "../../graphql/auth/Mutation.gql";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: TemplateIcon, current: false },
  {
    name: "Clients",
    href: "/dashboard/clients",
    icon: UserGroupIcon,
    current: false,
  },
  {
    name: "Calendar",
    href: "/dashboard/calendar",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: BellIcon,
    current: false,
  },
  {
    name: "Documents",
    href: "/dashboard/documents",
    icon: DocumentIcon,
    current: false,
  },
];

const navigationSettings = [
  {
    name: "Account details",
    href: "/settings/details",
    icon: AdjustmentsIcon,
    current: false,
  },
];

export default function Example({ children }: { children: JSX.Element }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const [logoutResult, executeLogout] = useMutation<any>(LOG_USER_OUT);

  const handleLogout = async () => {
    await executeLogout();
    router.push("/auth/login");
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex md:hidden"
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
              <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
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
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      onClick={(e) => router.push("/dashboard")}
                      className="h-8 w-auto cursor-pointer px-2"
                      src="/svg/logo.svg"
                      alt="Workflow"
                    />
                  </div>
                  <nav className="mt-5 space-y-1 px-2">
                    {navigation.map((item) => (
                      <Link key={item.name} passHref href={item.href}>
                        <div
                          //router.pathname == "/" ? "active" : ""

                          className={classNames(
                            {
                              " text-white": router.pathname === item.href,
                            },
                            {
                              "bg-gray-100 text-red-900":
                                router.pathname !== item.href,
                            },
                            "group flex items-center rounded-md px-4 py-4  text-base font-bold"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              {
                                " text-white": router.pathname === item.href,
                              },
                              {
                                "bg-gray-100 text-red-900":
                                  router.pathname !== item.href,
                              },
                              "mr-3 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                  <a href="#" className="group block flex-shrink-0">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                          Tom Cook
                        </p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="w-14 flex-shrink-0">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-[300px] md:flex-col ">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col  pt-4">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  onClick={(e) => router.push("/dashboard")}
                  className="h-8 w-auto cursor-pointer px-4"
                  src="/svg/logo.svg"
                  alt="Workflow"
                />
              </div>
              <nav className="mt-12 flex-1 space-y-4 px-[18px]">
                <p className="text-xs font-medium text-gray-600">Personal</p>
                {navigation.map((item) => (
                  <Link key={item.name} passHref href={item.href}>
                    <div
                      //router.pathname == "/" ? "active" : ""

                      className={classNames(
                        {
                          "bg-gray-100": router.pathname === item.href,
                        },
                        {
                          "": router.pathname !== item.href,
                        },
                        "group flex cursor-pointer items-center rounded-lg px-[21px]  py-[14px] text-lg font-semibold text-gray-800  transition-all duration-100 hover:bg-gray-100"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          "mr-[22px] h-[20px] w-[20px] text-neutralGreen"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                  </Link>
                ))}
                <p className="text-xs font-medium text-gray-600">Settings</p>
                {navigationSettings.map((item) => (
                  <Link key={item.name} passHref href={item.href}>
                    <div
                      //router.pathname == "/" ? "active" : ""

                      className={classNames(
                        {
                          "rounded-md bg-gray-100":
                            router.pathname === item.href,
                        },
                        {
                          "": router.pathname !== item.href,
                        },
                        "group flex cursor-pointer items-center px-[21px] py-[14px]  text-lg font-semibold text-gray-800 transition-all  duration-100 hover:bg-gray-100"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          "mr-[22px] h-[20px] w-[20px] text-neutralGreen"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 p-10">
              <a href="#" className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">
                      Tom Cook
                    </p>
                    <p
                      onClick={(e) => handleLogout()}
                      className="cursor-pointer text-xs font-medium text-neutralGreen "
                    >
                      Log out
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-[300px]">
          <div className="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="max-h-screen flex-1 flex-grow overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
