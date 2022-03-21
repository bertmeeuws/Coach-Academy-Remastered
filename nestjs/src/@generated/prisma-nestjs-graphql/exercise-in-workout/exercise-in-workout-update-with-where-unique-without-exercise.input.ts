import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';
import { ExerciseInWorkoutUpdateWithoutExerciseInput } from './exercise-in-workout-update-without-exercise.input';

@InputType()
export class ExerciseInWorkoutUpdateWithWhereUniqueWithoutExerciseInput {

    @Field(() => ExerciseInWorkoutWhereUniqueInput, {nullable:false})
    where!: ExerciseInWorkoutWhereUniqueInput;

    @Field(() => ExerciseInWorkoutUpdateWithoutExerciseInput, {nullable:false})
    data!: ExerciseInWorkoutUpdateWithoutExerciseInput;
}
