import { gql } from "urql";

export const GET_ALL_EXERCISES = gql`
  query ($name: String) {
    exercises(name: $name) {
      id
      name
      createdAt
      primary_muscle
      image
      video
      secondary_muscles
    }
  }
`;
