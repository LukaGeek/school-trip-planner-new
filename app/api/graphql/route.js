import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/graphql/typedefs";
import { resolvers } from "@/graphql/resolvers";
import { prisma } from "@/prisma/db";

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});

export { handler as GET, handler as POST };
