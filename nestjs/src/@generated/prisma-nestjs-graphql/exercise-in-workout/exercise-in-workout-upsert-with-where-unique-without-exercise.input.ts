import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';
import { ExerciseInWorkoutUpdateWithoutExerciseInput } from './exercise-in-workout-update-without-exercise.input';
import { ExerciseInWorkoutCreateWithoutExerciseInput } from './exercise-in-workout-create-without-exercise.input';

@InputType()
export class ExerciseInWorkoutUpsertWithWhereUniqueWithoutExerciseInput {

    @Field(() => ExerciseInWorkoutWhereUniqueInput, {nullable:false})
    where!: ExerciseInWorkoutWhereUniqueInput;

    @Field(() => ExerciseInWorkoutUpdateWithoutExerciseInput, {nullable:false})
    update!: ExerciseInWorkoutUpdateWithoutExerciseInput;

    @Field(() => ExerciseInWorkoutCreateWithoutExerciseInput, {nullable:false})
    create!: ExerciseInWorkoutCreateWithoutExerciseInput;
}
