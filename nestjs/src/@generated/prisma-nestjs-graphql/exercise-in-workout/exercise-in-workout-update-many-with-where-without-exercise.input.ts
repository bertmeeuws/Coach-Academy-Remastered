import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutScalarWhereInput } from './exercise-in-workout-scalar-where.input';
import { ExerciseInWorkoutUpdateManyMutationInput } from './exercise-in-workout-update-many-mutation.input';

@InputType()
export class ExerciseInWorkoutUpdateManyWithWhereWithoutExerciseInput {

    @Field(() => ExerciseInWorkoutScalarWhereInput, {nullable:false})
    where!: ExerciseInWorkoutScalarWhereInput;

    @Field(() => ExerciseInWorkoutUpdateManyMutationInput, {nullable:false})
    data!: ExerciseInWorkoutUpdateManyMutationInput;
}
