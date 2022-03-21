import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ExerciseCreateNestedOneWithoutExerciseInWorkoutInput } from '../exercise/exercise-create-nested-one-without-exercise-in-workout.input';
import { WorkoutCreateNestedOneWithoutExercisesInput } from '../workout/workout-create-nested-one-without-exercises.input';

@InputType()
export class ExerciseInWorkoutCreateInput {

    @Field(() => GraphQLJSON, {nullable:false})
    meta!: any;

    @Field(() => ExerciseCreateNestedOneWithoutExerciseInWorkoutInput, {nullable:false})
    exercise!: ExerciseCreateNestedOneWithoutExerciseInWorkoutInput;

    @Field(() => WorkoutCreateNestedOneWithoutExercisesInput, {nullable:true})
    Workout?: WorkoutCreateNestedOneWithoutExercisesInput;
}
