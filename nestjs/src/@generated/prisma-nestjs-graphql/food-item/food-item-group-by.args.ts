import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodItemWhereInput } from './food-item-where.input';
import { FoodItemOrderByWithAggregationInput } from './food-item-order-by-with-aggregation.input';
import { FoodItemScalarFieldEnum } from './food-item-scalar-field.enum';
import { FoodItemScalarWhereWithAggregatesInput } from './food-item-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FoodItemCountAggregateInput } from './food-item-count-aggregate.input';
import { FoodItemMinAggregateInput } from './food-item-min-aggregate.input';
import { FoodItemMaxAggregateInput } from './food-item-max-aggregate.input';

@ArgsType()
export class FoodItemGroupByArgs {

    @Field(() => FoodItemWhereInput, {nullable:true})
    where?: FoodItemWhereInput;

    @Field(() => [FoodItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FoodItemOrderByWithAggregationInput>;

    @Field(() => [FoodItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FoodItemScalarFieldEnum>;

    @Field(() => FoodItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: FoodItemScalarWhereWithAggregatesInput;

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
