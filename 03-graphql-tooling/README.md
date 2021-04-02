# Instructions

# Apollo CLI & VSCode Extension

## 1. Downloading the Schema

```
npx apollo schema:download --endpoint=https://pet-library.moonhighway.com graphql-schema.json
```

## 2. Installing the VSCode Extension

- Install the extension
- Add the `apollo.config.js`

```javascript
module.exports = {
  client: {
    service: "Pet-Library"
  }
};
```

- Add the `.env` file

```
APOLLO_KEY=service:Pet-Library:8ASl4P95ZDIdl4dpKZsZJw
```

- Show the Apollo Tab at the bottom
- In a second, we'll start to see how cool this is.

## 3. Creating the Query

1. Create `src/queries` folder
2. Create `petQuery.ts` file

_Because of the VSCode Extension, we can use VSCode like the playground. CTRL + Space surfaces the fields_

```javascript
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

```

## 4. Generate Types

```
npx apollo codegen:generate --localSchemaFile=graphql-schema.json --target=typescript --includes=src/**/*.ts --tagName=gql --addTypename --globalTypesFile=src/types/graphql-global-types.ts types
```

[<< prev](https://github.com/MoonHighway/curriculum/blob/master/GraphQL/Day3-ProductionReady/notes/AM2-GraphQLTooling/03-create-react-app-typescript.md) | [next >>](https://github.com/MoonHighway/curriculum/blob/master/GraphQL/Day3-ProductionReady/notes/AM2-GraphQLTooling/05-snowtooth-ui.md)
