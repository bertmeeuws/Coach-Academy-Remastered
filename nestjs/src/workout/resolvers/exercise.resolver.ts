import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExerciseCreateInput } from 'src/@generated/prisma-nestjs-graphql/exercise/exercise-create.input';
import { ExerciseService } from '../services/exercise.service';

@Resolver('Exercise')
export class ExerciseResolver {
  constructor(private readonly _exerciseService: ExerciseService) {}

  @Query('exercises')
  findAll() {
    return this._exerciseService.findAll();
  }

  @Query('exercise')
  findOne(@Args('createWorkoutInput') id: string) {
    return this._exerciseService.findOne(id);
  }

  @Mutation('createExercise')
  createOne(
    @Args('createExerciseInput')
    createExerciseInput: Prisma.ExerciseCreateInput,
    @Context() ctx
  ) {
    return this._exerciseService.createOne(createExerciseInput);
  }

  @Mutation('updateExercise')
  update(
    @Args('id') id: string,
    @Args('updateExerciseInput')
    updateExerciseInput: Prisma.ExerciseUpdateInput,
    @Context() ctx
  ) {
    return this._exerciseService.update(id, updateExerciseInput);
  }
}
