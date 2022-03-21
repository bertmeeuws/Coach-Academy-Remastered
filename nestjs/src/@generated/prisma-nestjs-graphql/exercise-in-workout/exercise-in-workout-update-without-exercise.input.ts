import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { WorkoutUpdateOneWithoutExercisesInput } from '../workout/workout-update-one-without-exercises.input';

@InputType()
export class ExerciseInWorkoutUpdateWithoutExerciseInput {

    @Field(() => GraphQLJSON, {nullable:true})
    meta?: any;

    @Field(() => WorkoutUpdateOneWithoutExercisesInput, {nullable:true})
    Workout?: WorkoutUpdateOneWithoutExercisesInput;
}
