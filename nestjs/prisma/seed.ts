import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

async function main() {
  

  for (let i = 1; i <= 20; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: 'CLIENT',
        profile_image: "/images/d5e36ea436b98a801e626fafe9ca6a64.jpg"
      },
    });

    const profile = await prisma.client.create({
      data: {
        surname: faker.name.lastName(),
        name: faker.name.firstName(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        phone: faker.phone.phoneNumber(),
        postal: 9000,
        userId: user.id,
        coachId: 3,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
