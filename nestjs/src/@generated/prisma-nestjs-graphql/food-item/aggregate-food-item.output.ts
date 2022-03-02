import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FoodItemCountAggregate } from './food-item-count-aggregate.output';
import { FoodItemMinAggregate } from './food-item-min-aggregate.output';
import { FoodItemMaxAggregate } from './food-item-max-aggregate.output';

@ObjectType()
export class AggregateFoodItem {

    @Field(() => FoodItemCountAggregate, {nullable:true})
    _count?: FoodItemCountAggregate;

    @Field(() => FoodItemMinAggregate, {nullable:true})
    _min?: FoodItemMinAggregate;

    @Field(() => FoodItemMaxAggregate, {nullable:true})
    _max?: FoodItemMaxAggregate;
}
