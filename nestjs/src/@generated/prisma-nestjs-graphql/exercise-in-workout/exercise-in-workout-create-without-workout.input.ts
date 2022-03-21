import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ExerciseCreateNestedOneWithoutExerciseInWorkoutInput } from '../exercise/exercise-create-nested-one-without-exercise-in-workout.input';

@InputType()
export class ExerciseInWorkoutCreateWithoutWorkoutInput {

    @Field(() => GraphQLJSON, {nullable:false})
    meta!: any;

    @Field(() => ExerciseCreateNestedOneWithoutExerciseInWorkoutInput, {nullable:false})
    exercise!: ExerciseCreateNestedOneWithoutExerciseInWorkoutInput;
}
