import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "../context/UserContext";
import { useMemo, useState } from "react";
import { withUrqlClient } from "next-urql";
import { GRAPHQL_SERVER } from "../constants/server";
import { dedupExchange, cacheExchange, fetchExchange } from "urql";

function MyApp({ Component, pageProps }: AppProps) {
  const [value, setValue] = useState(1);
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <>
      <UserContext.Provider value={providerValue}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default withUrqlClient(
  (ssr, ctx) => ({
    //@ts-ignore
    fetchOptions: () => ({
      credentials: "include",
      headers: {
        cookie: ctx && ctx.req ? ctx.req.headers.cookie : document.cookie,
      },
    }),
    exchanges: [
      // These are just the default exchanges.
      dedupExchange,
      cacheExchange,
      ssr,
      fetchExchange,
    ],
    url: GRAPHQL_SERVER,
  }),
  { ssr: true }
)(MyApp);
