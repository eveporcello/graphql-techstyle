/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPets
// ====================================================

export interface AllPets_allPets {
  __typename: "Pet";
  /**
   * A unique identifier for each `Pet`. This value also serves as a lookup for the `petById` query.
   */
  id: string;
  /**
   * The pet's given name
   */
  name: string;
}

export interface AllPets {
  /**
   * This query returns all of the data about the `Pets`. This is a list of `Pet` objects that are part of the Pet Library.
   */
  allPets: AllPets_allPets[];
}
