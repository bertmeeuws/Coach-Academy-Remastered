import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { WorkoutCreateNestedOneWithoutExercisesInput } from '../workout/workout-create-nested-one-without-exercises.input';

@InputType()
export class ExerciseInWorkoutCreateWithoutExerciseInput {

    @Field(() => GraphQLJSON, {nullable:false})
    meta!: any;

    @Field(() => WorkoutCreateNestedOneWithoutExercisesInput, {nullable:true})
    Workout?: WorkoutCreateNestedOneWithoutExercisesInput;
}
