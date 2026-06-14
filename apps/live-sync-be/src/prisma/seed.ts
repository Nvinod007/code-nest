const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      isVerified: true,
      name: "Test User",
      role: "admin",
      settings: {
        notifications: true,
        theme: "dark",
      },
    },
  });

  console.info("Created user:", user);
};

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
