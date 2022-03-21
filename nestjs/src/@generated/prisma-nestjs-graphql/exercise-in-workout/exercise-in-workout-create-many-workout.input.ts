import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class ExerciseInWorkoutCreateManyWorkoutInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    exerciseId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    meta!: any;
}