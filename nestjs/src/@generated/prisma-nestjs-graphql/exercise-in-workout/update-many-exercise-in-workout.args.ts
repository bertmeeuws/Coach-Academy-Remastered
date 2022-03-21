import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseInWorkoutUpdateManyMutationInput } from './exercise-in-workout-update-many-mutation.input';
import { ExerciseInWorkoutWhereInput } from './exercise-in-workout-where.input';

@ArgsType()
export class UpdateManyExerciseInWorkoutArgs {

    @Field(() => ExerciseInWorkoutUpdateManyMutationInput, {nullable:false})
    data!: ExerciseInWorkoutUpdateManyMutationInput;

    @Field(() => ExerciseInWorkoutWhereInput, {nullable:true})
    where?: ExerciseInWorkoutWhereInput;
}
