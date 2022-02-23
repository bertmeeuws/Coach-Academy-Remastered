import { dedupExchange, cacheExchange, fetchExchange } from "urql";
import { withUrqlClient } from "next-urql";
import { GRAPHQL_SERVER } from "../constants/server";
import { authExchange } from "@urql/exchange-auth";

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
      //@ts-ignore
    ],

    url: GRAPHQL_SERVER,
  }),
  { ssr: true }
);
