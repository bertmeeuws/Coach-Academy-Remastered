import { Client } from "@urql/core";
import { GRAPHQL_SERVER } from "../constants/server";

export const client = new Client({
  url: GRAPHQL_SERVER,
  fetchOptions: () => ({
    credentials: "include",
    headers: {
      cookie: document?.cookie,
    },
  }),
});

export default client;
