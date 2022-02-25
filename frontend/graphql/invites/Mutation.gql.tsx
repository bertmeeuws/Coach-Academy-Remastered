import { gql } from "urql";

export const CREATE_INVITE = gql`
  mutation Mutation {
    createInvite {
      id
    }
  }
`;
