import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseInWorkoutUpdateInput } from './exercise-in-workout-update.input';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';

@ArgsType()
export class UpdateOneExerciseInWorkoutArgs {

    @Field(() => ExerciseInWorkoutUpdateInput, {nullable:false})
    data!: ExerciseInWorkoutUpdateInput;

    @Field(() => ExerciseInWorkoutWhereUniqueInput, {nullable:false})
    where!: ExerciseInWorkoutWhereUniqueInput;
}
