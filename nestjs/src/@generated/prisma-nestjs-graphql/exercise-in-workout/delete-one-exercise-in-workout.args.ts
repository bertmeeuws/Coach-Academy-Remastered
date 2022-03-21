import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';

@ArgsType()
export class DeleteOneExerciseInWorkoutArgs {

    @Field(() => ExerciseInWorkoutWhereUniqueInput, {nullable:false})
    where!: ExerciseInWorkoutWhereUniqueInput;
}
