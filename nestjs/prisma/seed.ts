import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { ENUM_MUSLCE_GROUP } from '../src/workout/types';
const prisma = new PrismaClient();

async function main() {
  await prisma.client.deleteMany();

  const exercise = await prisma.exercise.create({
    data: {
      name: 'Bench press',
      primary_muscle: ENUM_MUSLCE_GROUP.CHEST,
      image: '',
      video: '',
      secondary_muscles: [ENUM_MUSLCE_GROUP.TRAPS, ENUM_MUSLCE_GROUP.SHOULDERS]
    }
  });

  for (let i = 1; i <= 20; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: 'CLIENT',
        profile_image: '/images/d5e36ea436b98a801e626fafe9ca6a64.jpg'
      }
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
        coachId: 3
      }
    });

    const workout = await prisma.workout.create({
      data: {
        day: 'Monday',
        name: 'Push',
        coachId: 3,
        clientId: profile.id
      }
    });

    const exerciseInWorkout = await prisma.exerciseInWorkout.create({
      data: {
        workoutId: workout.id,
        exerciseId: exercise.id,
        meta: {
          reps: 12,
          notes: 'lorem',
          rpe: 8,
          sets: 4
        }
      }
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
