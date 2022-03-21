import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ExerciseUpdateOneRequiredWithoutExerciseInWorkoutInput } from '../exercise/exercise-update-one-required-without-exercise-in-workout.input';
import { WorkoutUpdateOneWithoutExercisesInput } from '../workout/workout-update-one-without-exercises.input';

@InputType()
export class ExerciseInWorkoutUpdateInput {

    @Field(() => GraphQLJSON, {nullable:true})
    meta?: any;

    @Field(() => ExerciseUpdateOneRequiredWithoutExerciseInWorkoutInput, {nullable:true})
    exercise?: ExerciseUpdateOneRequiredWithoutExerciseInWorkoutInput;

    @Field(() => WorkoutUpdateOneWithoutExercisesInput, {nullable:true})
    Workout?: WorkoutUpdateOneWithoutExercisesInput;
}
