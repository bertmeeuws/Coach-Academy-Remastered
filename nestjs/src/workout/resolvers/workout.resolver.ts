import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WorkoutCreateInput } from 'src/@generated/prisma-nestjs-graphql/workout/workout-create.input';
import { WorkoutService } from '../workout.service';


@Resolver("Workout")
export class WorkoutResolver {
  constructor(private readonly _workoutService: WorkoutService) {}


  @Query("workouts")
    findAll(){
        return this._workoutService.findAll()
    }

    @Query("workout")
    findOne(@Args("createWorkoutInput") id: string){
        return this._workoutService.findOne(id)
    }

    @Mutation("createWorkout")
    createOne(@Args("createWorkout") createWorkout: WorkoutCreateInput){

    }

    

}
