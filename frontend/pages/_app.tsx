import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "../context/UserContext";
import { useEffect, useMemo, useState } from "react";
import { ME } from "../graphql/auth/Query.gql";
import { Provider, useQuery } from "urql";
import { client, ssrCache } from "../libs/clientSideUrqlClient";

function MyApp({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = useState(null);

  const providerValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  return (
    <>
      <Provider value={client}>
        <UserContext.Provider value={providerValue}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </Provider>
    </>
  );
}

export default MyApp;
