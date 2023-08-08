import gql from 'graphql-tag';
export const typeDefs = gql `
  type Joke {
    id: String!
    categories: [String]!
    value: String!
  }
  type AllJokes {
    result: [Joke]
  }

  type Query {
    categories: [String!]
    allJokes: AllJokes!
  }
`;
