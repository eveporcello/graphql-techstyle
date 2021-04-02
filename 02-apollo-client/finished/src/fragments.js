import { gql } from "@apollo/client";

export const COUNSELOR_DETAILS = gql`
  fragment CounselorDetails on Counselor {
    id
    name
    rank
  }
`;
