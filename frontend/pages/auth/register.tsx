import React from "react";
import { ENUM_USER_ROLES } from "../../types/enum";
import { useMutation } from "urql";
import { REGISTER_USER } from "../../graphql/auth/Mutation.gql";

export default function register() {
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
    console.log(data);
  };

  return (
    <div className="min-w-screen min-h-screen bg-ghost flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl overflow-hidden w-3/5">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-fluoGreen py-10 px-10"></div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10 bg-white">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <p className="text-red-500">{err}</p>
            <div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label className="text-xs font-semibold px-1">
                    First name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      value={name}
                      onChange={(e) => setName(e.currentTarget.value)}
                      type="text"
                      className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label className="text-xs font-semibold px-1">
                    Last name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      value={surname}
                      onChange={(e) => setSurname(e.currentTarget.value)}
                      type="text"
                      className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Smith"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-xs font-semibold px-1">Email</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                      type="email"
                      className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="johnsmith@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label className="text-xs font-semibold px-1">Password</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.currentTarget.value)}
                      type="password"
                      className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="************"
                    />
                  </div>
                </div>
                <div className="w-full px-3 mb-12">
                  <label className="text-xs font-semibold px-1">Role</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <select
                      onChange={(e) =>
                        setRole(
                          ENUM_USER_ROLES[
                            e.target.value as keyof typeof ENUM_USER_ROLES
                          ]
                        )
                      }
                      className="-ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none"
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
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    onClick={(e) => handleRegister()}
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    REGISTER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
