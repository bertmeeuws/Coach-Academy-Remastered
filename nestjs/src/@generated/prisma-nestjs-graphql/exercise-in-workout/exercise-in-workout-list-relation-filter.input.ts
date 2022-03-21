import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutWhereInput } from './exercise-in-workout-where.input';

@InputType()
export class ExerciseInWorkoutListRelationFilter {

    @Field(() => ExerciseInWorkoutWhereInput, {nullable:true})
    every?: ExerciseInWorkoutWhereInput;

    @Field(() => ExerciseInWorkoutWhereInput, {nullable:true})
    some?: ExerciseInWorkoutWhereInput;

    @Field(() => ExerciseInWorkoutWhereInput, {nullable:true})
    none?: ExerciseInWorkoutWhereInput;
}
