import { gql } from "urql";

export const ME = gql`
  query Query {
    me
  }
`;
