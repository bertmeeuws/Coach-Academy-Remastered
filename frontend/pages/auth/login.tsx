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
      <div className="min-w-screen min-h-screen bg-ghost flex items-center justify-center px-5 py-5">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl overflow-hidden w-3/5">
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-fluoGreen py-10 px-10"></div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10 bg-white">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
                <p>Please login</p>
                <p className="text-red-500">{err}</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        value={email}
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        value={password}
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      onClick={(e) => handleLogin()}
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      LOGIN NOW
                    </button>
                  </div>
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
