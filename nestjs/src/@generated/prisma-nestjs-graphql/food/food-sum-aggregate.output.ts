import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FoodSumAggregate {

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => Int, {nullable:true})
    carbs?: number;

    @Field(() => Int, {nullable:true})
    protein?: number;

    @Field(() => Int, {nullable:true})
    fat?: number;
}
