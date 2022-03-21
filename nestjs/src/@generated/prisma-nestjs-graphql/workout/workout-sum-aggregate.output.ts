import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkoutSumAggregate {

    @Field(() => Int, {nullable:true})
    coachId?: number;

    @Field(() => Int, {nullable:true})
    clientId?: number;
}
