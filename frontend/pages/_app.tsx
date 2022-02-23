import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "../context/UserContext";
import { useEffect, useMemo, useState } from "react";
import { ME } from "../graphql/auth/Query.gql";
import client from "../libs/clientSideUrqlClient";
import withUrqlClient from "../libs/withUrqlClient";
import { useQuery } from "urql";

function MyApp({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = useState(null);

  const providerValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  return (
    <>
      <UserContext.Provider value={providerValue}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default withUrqlClient(MyApp);
