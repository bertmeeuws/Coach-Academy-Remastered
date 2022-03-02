import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodItemWhereInput } from './food-item-where.input';
import { FoodItemOrderByWithRelationInput } from './food-item-order-by-with-relation.input';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FoodItemCountAggregateInput } from './food-item-count-aggregate.input';
import { FoodItemMinAggregateInput } from './food-item-min-aggregate.input';
import { FoodItemMaxAggregateInput } from './food-item-max-aggregate.input';

@ArgsType()
export class FoodItemAggregateArgs {

    @Field(() => FoodItemWhereInput, {nullable:true})
    where?: FoodItemWhereInput;

    @Field(() => [FoodItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FoodItemOrderByWithRelationInput>;

    @Field(() => FoodItemWhereUniqueInput, {nullable:true})
    cursor?: FoodItemWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FoodItemCountAggregateInput, {nullable:true})
    _count?: FoodItemCountAggregateInput;

    @Field(() => FoodItemMinAggregateInput, {nullable:true})
    _min?: FoodItemMinAggregateInput;

    @Field(() => FoodItemMaxAggregateInput, {nullable:true})
    _max?: FoodItemMaxAggregateInput;
}
