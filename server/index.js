import { ApolloServer } from "@apollo/server";
import { ChuckNorrisJokesAPI } from "./utils/dataSources.js";
import { typeDefs } from "./utils/typeDefs.js";
import { resolvers } from "./utils/resolvers.js";
import { startStandaloneServer } from "@apollo/server/standalone";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});
const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        chuckNorrisJokesAPI: new ChuckNorrisJokesAPI({ cache }),
      },
    };
  },
});
console.log(`🚀  Server ready at ${url}`);
