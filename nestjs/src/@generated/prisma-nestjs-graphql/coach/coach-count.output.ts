import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CoachCount {

    @Field(() => Int, {nullable:false})
    clients?: number;

    @Field(() => Int, {nullable:false})
    Invite?: number;

    @Field(() => Int, {nullable:false})
    Dietplan?: number;

    @Field(() => Int, {nullable:false})
    Workout?: number;
}
