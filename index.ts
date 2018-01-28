import { GraphQLServer } from 'graphql-yoga'
import { createResolvers, addAuthMiddleware } from 'simple-framework'

const resolvers = createResolvers('./resolvers')

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))