import * as bcrypt from "bcryptjs";

export const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      return await context.prisma.user.findMany();
    },
    googleUser: async (parent, args, context) => {
      return await context.prisma.googleUser.findMany();
    },

    facebookUser: async (parent, args, context) => {
      return await context.prisma.facebookUser.findMany();
    },

    whitelistedUser: async (parent, args, context) => {
      return await context.prisma.whitelistedUser.findMany();
    },

    transportDriver: async (parent, args, context) => {
      return await context.prisma.transportDriver.findMany();
    },
  },

  Mutation: {
    /* Users */

    addUser: async (parent, args, context) => {
      const hashedPassword = await bcrypt.hash(args.password, 10);

      return await context.prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          password: hashedPassword,
        },
      });
    },

    updateUser: async (parent, args, context) => {
      const hashedPassword = await bcrypt.hash(args.password, 10);

      return await context.prisma.user.update({
        where: { id: args.id },
        data: {
          name: args.name,
          email: args.email,
          password: hashedPassword,
        },
      });
    },

    deleteUser: async (parent, args, context) => {
      return await context.prisma.user.delete({
        where: { id: args.id },
      });
    },

    /* Google Users */

    addGoogleUser: async (parent, args, context) => {
      return await context.prisma.googleUser.create({
        data: {
          token_id: args.token_id,
          name: args.name,
          email: args.email,
          image: args.image,
        },
      });
    },

    updateGoogleUser: async (parent, args, context) => {
      return await context.prisma.googleUser.update({
        where: { id: args.id },
        data: {
          token_id: args.token_id,
          name: args.name,
          email: args.email,
          image: args.image,
        },
      });
    },

    deleteGoogleUser: async (parent, args, context) => {
      return await context.prisma.googleUser.delete({
        where: { id: args.id },
      });
    },

    /* Facebook Users */

    addFacebookUser: async (parent, args, context) => {
      return await context.prisma.facebookUser.create({
        data: {
          token_id: args.token_id,
          name: args.name,
          email: args.email,
          image: args.image,
        },
      });
    },

    updateFacebookUser: async (parent, args, context) => {
      return await context.prisma.facebookUser.update({
        where: { id: args.id },
        data: {
          token_id: args.token_id,
          name: args.name,
          email: args.email,
          image: args.image,
        },
      });
    },

    deleteFacebookUser: async (parent, args, context) => {
      return await context.prisma.facebookUser.delete({
        where: { id: args.id },
      });
    },

    /* Whitelisted Users */

    addWhitelistedUser: async (parent, args, context) => {
      return await context.prisma.whitelistedUser.create({
        data: {
          name: args.name,
          email: args.email,
        },
      });
    },

    updateWhitelistedUser: async (parent, args, context) => {
      return await context.prisma.whitelistedUser.update({
        where: { id: args.id },
        data: {
          name: args.name,
          email: args.email,
        },
      });
    },

    deleteWhitelistedUser: async (parent, args, context) => {
      return await context.prisma.whitelistedUser.delete({
        where: { id: args.id },
      });
    },

    /* Transport Drivers */

    addTransportDriver: async (parent, args, context) => {
      const hashedPassword = await bcrypt.hash(args.password, 10);
      return await context.prisma.transportDriver.create({
        data: {
          name: args.name,
          email: args.email,
          password: hashedPassword,
        },
      });
    },

    updateTransportDriver: async (parent, args, context) => {
      const hashedPassword = await bcrypt.hash(args.password, 10);
      return await context.prisma.transportDriver.update({
        where: { id: args.id },
        data: {
          name: args.name,
          email: args.email,
          password: hashedPassword,
        },
      });
    },

    deleteTransportDriver: async (parent, args, context) => {
      return await context.prisma.transportDriver.delete({
        where: { id: args.id },
      });
    },

    createTripRequest: async (parent, args, context) => {
      return context.prisma.tripRequest.create({
        data: {
          students: args.students,
          parents: args.parents,
          teachers: args.teachers,
          destination: args.destination,
          menu: args.menu,
          total: args.total,
          createdAt: new Date().toISOString(),
        },
      });
    },
  },
};
