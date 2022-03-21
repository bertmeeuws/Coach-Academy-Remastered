import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseInWorkoutWhereInput } from './exercise-in-workout-where.input';

@ArgsType()
export class DeleteManyExerciseInWorkoutArgs {

    @Field(() => ExerciseInWorkoutWhereInput, {nullable:true})
    where?: ExerciseInWorkoutWhereInput;
}
