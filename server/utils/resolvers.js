export const resolvers = {
    Query: {
        categories: (_, __, { dataSources }) => dataSources.chuckNorrisJokesAPI.getAllCategories(),
        allJokes: (_, __, { dataSources }) => dataSources.chuckNorrisJokesAPI.getAllJokes()
    }
};
