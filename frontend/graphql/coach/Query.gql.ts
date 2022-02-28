import { gql } from "urql";

export const GET_COACH_DETAILS = gql`
  query Coach($coachId: Int!) {
    coach(id: $coachId) {
      id
      surname
      name
      user {
        profile_image
        email
      }
    }
  }
`;
