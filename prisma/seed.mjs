import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

  await prisma.user.upsert({
    where: { username: process.env.ADMIN_USERNAME },
    update: {},
    create: {
      username: process.env.ADMIN_USERNAME,
      password: hashedPassword,
    },
  });

  console.log("Admin user created!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
