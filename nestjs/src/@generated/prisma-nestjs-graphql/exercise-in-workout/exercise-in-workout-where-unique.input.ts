import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ExerciseInWorkoutWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;
}
