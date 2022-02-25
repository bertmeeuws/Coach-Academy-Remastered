import { gql } from "urql";

export const GET_ALL_CLIENTS_FROM_COACH = gql`
  query Clients($filter: String) {
    clients(filter: $filter) {
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
