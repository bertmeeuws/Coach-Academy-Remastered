import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FoodCountAggregate } from './food-count-aggregate.output';
import { FoodAvgAggregate } from './food-avg-aggregate.output';
import { FoodSumAggregate } from './food-sum-aggregate.output';
import { FoodMinAggregate } from './food-min-aggregate.output';
import { FoodMaxAggregate } from './food-max-aggregate.output';

@ObjectType()
export class FoodGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    carbs!: number;

    @Field(() => Int, {nullable:false})
    protein!: number;

    @Field(() => Int, {nullable:false})
    fat!: number;

    @Field(() => FoodCountAggregate, {nullable:true})
    _count?: FoodCountAggregate;

    @Field(() => FoodAvgAggregate, {nullable:true})
    _avg?: FoodAvgAggregate;

    @Field(() => FoodSumAggregate, {nullable:true})
    _sum?: FoodSumAggregate;

    @Field(() => FoodMinAggregate, {nullable:true})
    _min?: FoodMinAggregate;

    @Field(() => FoodMaxAggregate, {nullable:true})
    _max?: FoodMaxAggregate;
}
