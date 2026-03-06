export const resolvers = {
  Query: {
    test: async (parent, args, context) => {
      return await context.prisma.test.findMany();
    },
  },

  Mutation: {
    addTest: async (parent, args, context) => {
      return await context.prisma.test.create({
        data: {
          test: args.test,
        },
      });
    },

    updateTest: async (parent, args, context) => {
      return await context.prisma.test.update({
        where: { id: args.id },
        data: {
          test: args.test,
        },
      });
    },

    deleteTest: async (parent, args, context) => {
      return await context.prisma.test.delete({
        where: { id: args.id },
      });
    },
  },
};
