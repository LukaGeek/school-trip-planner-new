import * as bcrypt from "bcryptjs";

export const Mutation = {
  async addUser(_, { name, email, password }, context) {
    if (!name || !email || !password)
      throw new Error("All fields are required");

    const existingUser = await context.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) throw new Error("This user already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await context.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return user;
  },

  async addTransportDriver(_, { email, name, password }, context) {
    if (!name || !email || !password)
      throw new Error("All fields are required");

    const existingTransportDriver =
      await context.prisma.transportDriver.findUnique({
        where: { email },
      });

    if (existingTransportDriver)
      throw new Error("This transport driver already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const transportDriver = await context.prisma.transportDriver.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return transportDriver;
  },
};
