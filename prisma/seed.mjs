import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASS, 10);

  await prisma.user.upsert({
    where: { username: process.env.ADMIN_PASSWORD },
    update: {},
    create: {
      username: "admin",
      password: hashedPassword,
    },
  });

  console.log("Admin user created with username: admin and password: admin123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
