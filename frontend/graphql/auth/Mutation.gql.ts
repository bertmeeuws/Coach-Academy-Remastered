import { gql } from "urql";

export const LOGIN_USER = gql`
  mutation CreateLogin($createLogin: CreateLoginInput!) {
    createLogin(createLogin: $createLogin)
  }
`;

export const LOG_USER_OUT = gql`
  mutation Mutation {
    logout
  }
`;

export const REGISTER_USER = gql`
  mutation Mutation($registerUser: RegisterUserInput!) {
    registerUser(registerUser: $registerUser)
  }
`;
