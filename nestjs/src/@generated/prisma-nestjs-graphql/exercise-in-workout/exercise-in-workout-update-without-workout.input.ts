import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ExerciseUpdateOneRequiredWithoutExerciseInWorkoutInput } from '../exercise/exercise-update-one-required-without-exercise-in-workout.input';

@InputType()
export class ExerciseInWorkoutUpdateWithoutWorkoutInput {

    @Field(() => GraphQLJSON, {nullable:true})
    meta?: any;

    @Field(() => ExerciseUpdateOneRequiredWithoutExerciseInWorkoutInput, {nullable:true})
    exercise?: ExerciseUpdateOneRequiredWithoutExerciseInWorkoutInput;
}
