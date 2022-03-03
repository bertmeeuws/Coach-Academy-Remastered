import { gql } from "urql";

export const CREATE_INVITE = gql`
  mutation Mutation {
    createInvite {
      id
    }
  }
`;

export const USE_INVITE = gql`
  mutation useInvite($invite_id: String!) {
    invalidateInvite(invite_id: $invite_id)
  }
`;
