import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutUpdateWithoutExercisesInput } from './workout-update-without-exercises.input';
import { WorkoutCreateWithoutExercisesInput } from './workout-create-without-exercises.input';

@InputType()
export class WorkoutUpsertWithoutExercisesInput {

    @Field(() => WorkoutUpdateWithoutExercisesInput, {nullable:false})
    update!: WorkoutUpdateWithoutExercisesInput;

    @Field(() => WorkoutCreateWithoutExercisesInput, {nullable:false})
    create!: WorkoutCreateWithoutExercisesInput;
}
