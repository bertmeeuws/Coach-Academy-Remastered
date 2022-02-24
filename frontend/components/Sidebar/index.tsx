/* This example requires Tailwind CSS v2.0+ */
import { Children, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ChartBarIcon,
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
            className="fixed inset-0 flex z-40 md:hidden"
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
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
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
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto px-2"
                      src="/svg/logo.svg"
                      alt="Workflow"
                    />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <Link key={item.name} passHref href={item.href}>
                        <div
                          //router.pathname == "/" ? "active" : ""

                          className={classNames(
                            {
                              "bg-fluoGreen text-white":
                                router.pathname === item.href,
                            },
                            {
                              "bg-gray-100 text-red-900":
                                router.pathname !== item.href,
                            },
                            "group flex items-center px-4 py-4 text-base  rounded-md font-bold"
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
                              "w-6 h-6 mr-3"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <a href="#" className="flex-shrink-0 group block">
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
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-[300px] md:flex-col md:fixed md:inset-y-0 ">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0  bg-fluoGreen pt-4">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 px-4 w-auto"
                  src="/svg/logo.svg"
                  alt="Workflow"
                />
              </div>
              <nav className="flex-1 px-4 space-y-4 mt-12">
                <p className="font-medium text-xs text-white">Personal</p>
                {navigation.map((item) => (
                  <Link key={item.name} passHref href={item.href}>
                    <div
                      //router.pathname == "/" ? "active" : ""

                      className={classNames(
                        {
                          "bg-white bg-opacity-20":
                            router.pathname === item.href,
                        },
                        {
                          "bg-transparent": router.pathname !== item.href,
                        },
                        "text-white group flex items-center px-[21px] py-[14px] text-lg  font-semibold cursor-pointer hover:bg-white hover:bg-opacity-20 transition-all duration-100"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          "w-[20px] h-[20px] mr-[22px] text-white"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex p-10">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">Tom Cook</p>
                    <p
                      onClick={(e) => handleLogout()}
                      className="text-xs font-medium text-white cursor-pointer"
                    >
                      Log out
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="md:pl-[300px] flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1 flex-grow">{children}</main>
        </div>
      </div>
    </>
  );
}
