import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { ExerciseInWorkoutCreateInput } from "src/@generated/prisma-nestjs-graphql/exercise-in-workout/exercise-in-workout-create.input";
import { ExerciseInWorkout } from "src/@generated/prisma-nestjs-graphql/exercise-in-workout/exercise-in-workout.model";


@Injectable()
export class ExercisesInWorkoutService {
  constructor(
    private  _prisma: PrismaService,  
  ) {}

  async findAll(): Promise<ExerciseInWorkout[]>{
    return await this._prisma.exerciseInWorkout.findMany()
    }

    async findOne(id: number): Promise<ExerciseInWorkout> {
        return await this._prisma.exerciseInWorkout.findFirst({
            where: {
                id: id
            }
        })
    }

    async createOne(createWorkout: ExerciseInWorkoutCreateInput): Promise<ExerciseInWorkout>{
        return this._prisma.exerciseInWorkout.create({
            data: createWorkout
        })
    }

    async delete(id: number): Promise<ExerciseInWorkout>{
        return this._prisma.exerciseInWorkout.delete({
            where: {
                id: id
            }
        })
    }
}