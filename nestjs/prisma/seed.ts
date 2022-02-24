import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

async function main() {
  const aliceUser = await prisma.user.create({
    data: {
      email: 'alisce@prisma.io',
      password: 'blabla',
      role: 'CLIENT',
    },
  });

  const aliceProfile = await prisma.client.create({
    data: {
      surname: 'Alice',
      name: 'Kruger',
      address: 'Street name goes here',
      city: 'Bruges',
      phone: '0491144429',
      postal: 9000,
      userId: aliceUser.id,
      coachId: 2,
    },
  });

  for (let i = 1; i <= 20; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: 'CLIENT',
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
        coachId: 2,
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
