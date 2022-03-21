import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseInWorkoutCreateInput } from './exercise-in-workout-create.input';

@ArgsType()
export class CreateOneExerciseInWorkoutArgs {

    @Field(() => ExerciseInWorkoutCreateInput, {nullable:false})
    data!: ExerciseInWorkoutCreateInput;
}
