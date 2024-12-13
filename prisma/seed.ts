import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        token: "123",
        fullName: "Pavlo",
        email: "test@gmail.com",
        password: hashSync("12345", 10),
      },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Bag",
        imageUrl: "/assets/bag.png",
        rating: 4,
        reviews: 100,
        price: 50,
        oldPrice: 100,
      },
      {
        name: "Coat",
        imageUrl: "/assets/coat.png",
        rating: 3,
        reviews: 12,
        price: 120,
        oldPrice: 150,
      },
      {
        name: "Cooler",
        imageUrl: "/assets/cooler.png",
        rating: 10,
        reviews: 100,
        price: 200,
        oldPrice: 240,
      },
      {
        name: "Shell",
        imageUrl: "/assets/shell.png",
        rating: 10,
        reviews: 100,
        price: 80,
        oldPrice: 110,
      },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "123",
      },
    ],
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
