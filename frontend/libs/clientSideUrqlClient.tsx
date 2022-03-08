import {
  createClient,
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from "urql";
import { GRAPHQL_SERVER } from "../constants/server";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";

const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: GRAPHQL_SERVER,
  exchanges: [dedupExchange, cacheExchange, ssrCache, multipartFetchExchange],
  fetchOptions: () => ({
    credentials: "include",
  }),
});

export { client, ssrCache };
