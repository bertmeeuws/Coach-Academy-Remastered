import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExerciseCreateInput } from 'src/@generated/prisma-nestjs-graphql/exercise/exercise-create.input';
import { ExerciseService } from '../services/exercise.service';


@Resolver("Exercise")
export class ExerciseResolver {
  constructor(private readonly _exerciseService: ExerciseService) {}


  @Query("exercisesInWorkouts")
    findAll(){
        return this._exerciseService.findAll()
    }

    @Query("exerciseInWorkout")
    findOne(@Args("createWorkoutInput") id: string){
        return this._exerciseService.findOne(id)
    }

    @Mutation("createExerciseInWorkout")
    createOne(@Args("createExerciseInWorkoutInput") createExerciseInput: ExerciseCreateInput){
        return this._exerciseService.createOne(createExerciseInput)
    }



}
