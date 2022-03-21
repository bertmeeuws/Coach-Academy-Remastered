import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';
import { ExerciseInWorkoutUpdateWithoutWorkoutInput } from './exercise-in-workout-update-without-workout.input';

@InputType()
export class ExerciseInWorkoutUpdateWithWhereUniqueWithoutWorkoutInput {

    @Field(() => ExerciseInWorkoutWhereUniqueInput, {nullable:false})
    where!: ExerciseInWorkoutWhereUniqueInput;

    @Field(() => ExerciseInWorkoutUpdateWithoutWorkoutInput, {nullable:false})
    data!: ExerciseInWorkoutUpdateWithoutWorkoutInput;
}
