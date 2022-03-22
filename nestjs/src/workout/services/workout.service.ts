import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { WorkoutCreateInput } from 'src/@generated/prisma-nestjs-graphql/workout/workout-create.input';
import { Workout } from 'src/@generated/prisma-nestjs-graphql/workout/workout.model';

@Injectable()
export class WorkoutService {
  constructor(private _prisma: PrismaService) {}

  async findMany(id: string): Promise<Workout[]> {
    return await this._prisma.workout.findMany();
  }

  async findOne(id: string): Promise<Workout> {
    return await this._prisma.workout.findFirst({
      where: {
        id: id
      }
    });
  }

  async createOne(createWorkout: WorkoutCreateInput): Promise<Workout> {
    return this._prisma.workout.create({
      data: createWorkout
    });
  }

  async delete(id: string): Promise<Workout> {
    return this._prisma.workout.delete({
      where: {
        id: id
      }
    });
  }
}
