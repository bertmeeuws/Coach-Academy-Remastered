import { gql } from "urql";
export const GET_ALL_CLIENTS = gql`
  query Clients {
    clients {
      id
      surname
      name
      user {
        id
        email
        password
      }
    }
  }
`;
