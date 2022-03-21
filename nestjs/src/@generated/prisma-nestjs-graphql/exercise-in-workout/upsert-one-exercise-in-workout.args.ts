import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';
import { ExerciseInWorkoutCreateInput } from './exercise-in-workout-create.input';
import { ExerciseInWorkoutUpdateInput } from './exercise-in-workout-update.input';

@ArgsType()
export class UpsertOneExerciseInWorkoutArgs {

    @Field(() => ExerciseInWorkoutWhereUniqueInput, {nullable:false})
    where!: ExerciseInWorkoutWhereUniqueInput;

    @Field(() => ExerciseInWorkoutCreateInput, {nullable:false})
    create!: ExerciseInWorkoutCreateInput;

    @Field(() => ExerciseInWorkoutUpdateInput, {nullable:false})
    update!: ExerciseInWorkoutUpdateInput;
}
