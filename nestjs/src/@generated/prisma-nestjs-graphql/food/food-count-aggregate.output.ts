import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FoodCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    image!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    carbs!: number;

    @Field(() => Int, {nullable:false})
    protein!: number;

    @Field(() => Int, {nullable:false})
    fat!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
