import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { ExerciseCreateInput } from "src/@generated/prisma-nestjs-graphql/exercise/exercise-create.input";
import { Exercise } from "src/@generated/prisma-nestjs-graphql/exercise/exercise.model";


@Injectable()
export class ExerciseService {
  constructor(
    private  _prisma: PrismaService,  
  ) {}

  async findAll(): Promise<Exercise[]>{
    return await this._prisma.exercise.findMany()
    }

    async findOne(id: string): Promise<Exercise> {
        return await this._prisma.exercise.findFirst({
            where: {
                id: id
            }
        })
    }

    async createOne(createWorkout: ExerciseCreateInput): Promise<Exercise>{
        return this._prisma.exercise.create({
            data: createWorkout
        })
    }

    async delete(id: string): Promise<Exercise>{
        return this._prisma.exercise.delete({
            where: {
                id: id
            }
        })
    }
}