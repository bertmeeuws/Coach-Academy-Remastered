import { gql } from "urql";

export const GET_ALL_CLIENTS_FROM_COACH = gql`
  query Clients {
    clients {
      id
      user {
        email
      }
      surname
      name
      dob
      address
      number
      phone
      postal
      city
    }
  }
`;
