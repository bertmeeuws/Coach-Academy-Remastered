import React from "react";
import { ENUM_USER_ROLES } from "../../types/enum";
import { gql, useMutation, useQuery } from "urql";
import { REGISTER_USER } from "../../graphql/auth/Mutation.gql";
import AuthProvider from "../../components/AuthHOC/AuthProvider";
import { client, ssrCache } from "../../libs/clientSideUrqlClient";
import Link from "next/link";

export function register() {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [role, setRole] = React.useState<ENUM_USER_ROLES>(
    ENUM_USER_ROLES.COACH
  );
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [err, setErr] = React.useState("");

  const [result, registerUser] = useMutation(REGISTER_USER);

  const handleRegister = async () => {
    setErr("");
    if (name === "" || surname === "" || email === "") {
      setErr("Please fill in all the fields");
      return;
    }
    const { data } = await registerUser({
      registerUser: {
        email,
        password,
        surname,
        name,
        type: role,
      },
    });
  };

  return (
    <AuthProvider>
      <div className="min-w-screen flex min-h-screen items-center justify-center bg-ghost px-5 py-5">
        <div className="w-full overflow-hidden rounded-3xl bg-gray-100 text-gray-500 shadow-xl sm:w-3/5">
          <div className="w-full md:flex">
            <div className="hidden w-1/2 bg-fluoGreen py-10 px-10 md:block"></div>
            <div className="w-full bg-white py-10 px-5 md:w-1/2 md:px-10">
              <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold text-gray-900">REGISTER</h1>
                <p>Enter your information to register</p>
              </div>
              <p className="text-red-500">{err}</p>
              <div>
                <div className="-mx-3 flex">
                  <div className="mb-5 w-1/2 px-3">
                    <label className="px-1 text-xs font-semibold">
                      First name
                    </label>
                    <div className="flex">
                      <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center">
                        <i className="mdi mdi-account-outline text-lg text-gray-400"></i>
                      </div>
                      <input
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                        type="text"
                        className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-3 pr-3 outline-none focus:border-indigo-500"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div className="mb-5 w-1/2 px-3">
                    <label className="px-1 text-xs font-semibold">
                      Last name
                    </label>
                    <div className="flex">
                      <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center">
                        <i className="mdi mdi-account-outline text-lg text-gray-400"></i>
                      </div>
                      <input
                        value={surname}
                        onChange={(e) => setSurname(e.currentTarget.value)}
                        type="text"
                        className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-3 pr-3 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex">
                  <div className="mb-5 w-full px-3">
                    <label className="px-1 text-xs font-semibold">Email</label>
                    <div className="flex">
                      <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center">
                        <i className="mdi mdi-email-outline text-lg text-gray-400"></i>
                      </div>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        type="email"
                        className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-3 pr-3 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex">
                  <div className="mb-12 w-full px-3">
                    <label className="px-1 text-xs font-semibold">
                      Password
                    </label>
                    <div className="flex">
                      <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center">
                        <i className="mdi mdi-lock-outline text-lg text-gray-400"></i>
                      </div>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        type="password"
                        className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-3 pr-3 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                  <div className="mb-12 w-full px-3">
                    <label className="px-1 text-xs font-semibold">Role</label>
                    <div className="flex">
                      <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center">
                        <i className="mdi mdi-lock-outline text-lg text-gray-400"></i>
                      </div>
                      <select
                        onChange={(e) =>
                          setRole(
                            ENUM_USER_ROLES[
                              e.target.value as keyof typeof ENUM_USER_ROLES
                            ]
                          )
                        }
                        className="-ml-10 rounded-lg border-2 border-gray-200 py-2 pl-3 pr-3 outline-none"
                      >
                        {Object.values(ENUM_USER_ROLES).map(
                          (i: ENUM_USER_ROLES) => (
                            <option className="capitalize" key={i} value={i}>
                              {i.toLocaleLowerCase()}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-col">
                  <div className="mb-5 w-full px-3">
                    <button
                      onClick={(e) => handleRegister()}
                      className="mx-auto block w-full max-w-xs rounded-lg bg-indigo-500 px-3 py-3 font-semibold text-white hover:bg-indigo-700 focus:bg-indigo-700"
                    >
                      REGISTER NOW
                    </button>
                  </div>
                  <Link passHref href="/auth/register">
                    <p className="text-center">I alreay have an account.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default register;
