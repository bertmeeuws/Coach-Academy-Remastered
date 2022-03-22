import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { Exercise } from 'src/@generated/prisma-nestjs-graphql/exercise/exercise.model';

@Injectable()
export class ExerciseService {
  constructor(private _prisma: PrismaService) {}

  async findAll(): Promise<Exercise[]> {
    return await this._prisma.exercise.findMany();
  }

  async findOne(id: string): Promise<Exercise> {
    return await this._prisma.exercise.findFirst({
      where: {
        id: id
      }
    });
  }

  async createOne(
    exerciseCreateInput: Prisma.ExerciseCreateInput
  ): Promise<Exercise> {
    return this._prisma.exercise.create({
      data: exerciseCreateInput
    });
  }

  async delete(id: string): Promise<Exercise> {
    return this._prisma.exercise.delete({
      where: {
        id: id
      }
    });
  }

  async update(id: string, updateExerciseInput: Prisma.UserUpdateInput) {
    return this._prisma.exercise.update({
      where: {
        id: id
      },
      data: updateExerciseInput
    });
  }
}
