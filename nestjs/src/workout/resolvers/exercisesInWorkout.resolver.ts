import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExerciseInWorkoutCreateInput } from 'src/@generated/prisma-nestjs-graphql/exercise-in-workout/exercise-in-workout-create.input';
import { WorkoutCreateInput } from 'src/@generated/prisma-nestjs-graphql/workout/workout-create.input';
import { ExercisesInWorkoutService } from '../services/exercisesInWorkout.service';
import { WorkoutService } from '../workout.service';

@Resolver('ExercisesInWorkout')
export class ExercisesInWorkoutResolver {
  constructor(
    private readonly _exercisesInWorkoutService: ExercisesInWorkoutService
  ) {}

  @Query('exercisesInWorkouts')
  findAll() {
    return this._exercisesInWorkoutService.findAll();
  }

  @Query('exerciseInWorkout')
  findOne(@Args('createWorkoutInput') id: number) {
    return this._exercisesInWorkoutService.findOne(id);
  }

  @Mutation('createExerciseInWorkout')
  createOne(
    @Args('createExerciseInWorkoutInput')
    createExerciseInWorkoutInput: ExerciseInWorkoutCreateInput
  ) {
    return this._exercisesInWorkoutService.createOne(
      createExerciseInWorkoutInput
    );
  }
}
