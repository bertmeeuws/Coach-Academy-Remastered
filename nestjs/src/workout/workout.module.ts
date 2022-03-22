import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutResolver } from './resolvers/workout.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ExerciseService } from './services/exercise.service';
import { ExercisesInWorkoutService } from './services/exercisesInWorkout.service';
import { ExerciseResolver } from './resolvers/exercise.resolver';
import { ExercisesInWorkoutResolver } from './resolvers/exercisesInWorkout.resolver';

@Module({
  providers: [
    WorkoutService,
    WorkoutResolver,
    PrismaService,
    ExerciseService,
    ExercisesInWorkoutService,
    ExerciseResolver,
    ExercisesInWorkoutResolver
  ]
})
export class WorkoutModule {}
