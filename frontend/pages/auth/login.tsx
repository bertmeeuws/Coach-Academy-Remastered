import React from "react";
import { useMutation, useQuery } from "urql";
import {
  LOGIN_USER,
  LOG_USER_OUT,
  REGISTER_USER,
} from "../../graphql/auth/Mutation.gql";
import { useRouter } from "next/router";
import { UserContext } from "../../context/UserContext";
import AuthProvider from "../../components/AuthHOC/AuthProvider";
import Link from "next/link";

function Login() {
  const router = useRouter();
  const [email, setEmail] = React.useState("bert12345@gmail.com");
  const [password, setPassword] = React.useState("test");
  const [err, setErr] = React.useState("");
  const { setAuth } = React.useContext(UserContext);

  const [registerResult, executeMutation] = useMutation<any>(LOGIN_USER);

  const handleLogin = async () => {
    setErr("");
    const { data } = await executeMutation({
      createLogin: { email, password },
    });
    if (data?.createLogin) {
      setAuth(data.createLogin);
      router.push("/dashboard");
      return;
    }
    setErr("Invalid credentials");
  };

  return (
    <AuthProvider>
      <div className="flex min-h-screen w-screen items-center justify-center bg-ghost py-5 px-2">
        <div className="w-4/5 overflow-hidden rounded-3xl bg-gray-100 text-gray-500 shadow-xl md:w-3/5">
          <div className="w-full md:flex">
            <div className="hidden bg-fluoGreen py-10 px-10 md:block md:w-1/2"></div>
            <div className="w-full bg-white py-10 px-5">
              <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold text-gray-900">LOGIN</h1>
                <p>Please login</p>
                <p className="text-red-500">{err}</p>
              </div>
              <div>
                <div className="-mx-3 flex">
                  <div className="mb-5 w-full px-3">
                    <label className="px-1 text-xs font-semibold">Email</label>
                    <div className="flex">
                      <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center">
                        <i className="mdi mdi-email-outline text-lg text-gray-400"></i>
                      </div>
                      <input
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        value={email}
                        type="email"
                        className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-4 pr-3 outline-none focus:border-indigo-500 sm:pl-10"
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
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        value={password}
                        type="text"
                        className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-4 pr-3 outline-none focus:border-indigo-500 sm:pl-10"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-col justify-center">
                  <div className="mb-5 w-full px-3">
                    <button
                      onClick={(e) => handleLogin()}
                      className="mx-auto block w-full max-w-xs rounded-lg bg-indigo-500 px-3 py-3 font-semibold text-white hover:bg-indigo-700 focus:bg-indigo-700"
                    >
                      LOGIN NOW
                    </button>
                  </div>
                  <Link passHref href="/auth/register">
                    <p className="text-center">I don't have an account.</p>
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

export default Login;
