import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';
import { ExerciseInWorkoutUpdateWithoutWorkoutInput } from './exercise-in-workout-update-without-workout.input';
import { ExerciseInWorkoutCreateWithoutWorkoutInput } from './exercise-in-workout-create-without-workout.input';

@InputType()
export class ExerciseInWorkoutUpsertWithWhereUniqueWithoutWorkoutInput {

    @Field(() => ExerciseInWorkoutWhereUniqueInput, {nullable:false})
    where!: ExerciseInWorkoutWhereUniqueInput;

    @Field(() => ExerciseInWorkoutUpdateWithoutWorkoutInput, {nullable:false})
    update!: ExerciseInWorkoutUpdateWithoutWorkoutInput;

    @Field(() => ExerciseInWorkoutCreateWithoutWorkoutInput, {nullable:false})
    create!: ExerciseInWorkoutCreateWithoutWorkoutInput;
}
