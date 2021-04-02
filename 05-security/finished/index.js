const { ApolloServer } = require("apollo-server");
const { readFileSync } = require("fs");
const depthLimit = require("graphql-depth-limit");
const {
  createComplexityLimitRule
} = require("graphql-validation-complexity");

const typeDefs = readFileSync(
  "./typeDefs.graphql",
  "UTF-8"
);

const server = new ApolloServer({
  typeDefs,
  mocks: true,
  validationRules: [
    depthLimit(5),
    createComplexityLimitRule(1000, {
      onCost: cost => console.log(`Query cost: ${cost}`)
    })
  ]
});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
