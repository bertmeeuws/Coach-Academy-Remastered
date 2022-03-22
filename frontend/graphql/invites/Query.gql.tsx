import { gql } from "urql";

export const GET_INVITE_BY_ID = gql`
  query getInvite($id: String!) {
    invite(id: $id) {
      id
      invalidated
      coach {
        name
        surname
        user {
          profile_image
          email
        }
      }
    }
  }
`;
