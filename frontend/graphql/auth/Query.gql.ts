import { Resolver } from "@nestjs/graphql";
import { gql } from "urql";

export const ME = gql`
  query Me {
    me {
      role
      id
    }
  }
`;
