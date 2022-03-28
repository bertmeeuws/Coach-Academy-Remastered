import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "../context/UserContext";
import { Suspense, useEffect, useMemo, useState } from "react";
import { ME } from "../graphql/auth/Query.gql";
import { Provider, useQuery } from "urql";
import { client, ssrCache } from "../libs/clientSideUrqlClient";
import Head from "next/head";
import Spinner from "../ui/Spinner";
import ResponsiveHelper from "../components/ResponsiveHelper";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function MyApp({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = useState(null);

  const providerValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" />
      </Head>
      <Provider value={client}>
        <ResponsiveHelper />
        <UserContext.Provider value={providerValue}>
          <Suspense fallback={<Spinner />}>
            <DndProvider backend={HTML5Backend}>
              <Component {...pageProps} />
            </DndProvider>
          </Suspense>
        </UserContext.Provider>
      </Provider>
    </>
  );
}

export default MyApp;
