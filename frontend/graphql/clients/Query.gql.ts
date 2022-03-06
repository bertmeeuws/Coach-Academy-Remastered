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

export const GET_CLIENT_DETAILS = gql`query{
  client{
      id
      surname
      name
      address
      dob
      city  
      postal
      phone
      user{
        profile_image
      }
  }
}`