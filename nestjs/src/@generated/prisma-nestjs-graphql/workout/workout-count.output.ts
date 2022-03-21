import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkoutCount {

    @Field(() => Int, {nullable:false})
    exercises?: number;
}
