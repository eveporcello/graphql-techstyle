import { gql } from "@apollo/client";

const PetQuery = gql`
  query AllPets {
    allPets {
      id
      name
    }
  }
`;

export default PetQuery;
