const politicianSchema = require("./politicianSchema");
const { gql } = require("apollo-server");
const linkSchema = gql`
scalar Date
type Query {
  _: Boolean
}
type Mutation {
  _: Boolean
}
type Subscription {
  _: Boolean
}
`;
module.exports = [
  linkSchema,
  politicianSchema];
