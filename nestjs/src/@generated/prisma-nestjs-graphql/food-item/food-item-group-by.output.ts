import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FoodItemCountAggregate } from './food-item-count-aggregate.output';
import { FoodItemMinAggregate } from './food-item-min-aggregate.output';
import { FoodItemMaxAggregate } from './food-item-max-aggregate.output';

@ObjectType()
export class FoodItemGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    amount!: string;

    @Field(() => String, {nullable:true})
    mealId?: string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => FoodItemCountAggregate, {nullable:true})
    _count?: FoodItemCountAggregate;

    @Field(() => FoodItemMinAggregate, {nullable:true})
    _min?: FoodItemMinAggregate;

    @Field(() => FoodItemMaxAggregate, {nullable:true})
    _max?: FoodItemMaxAggregate;
}
