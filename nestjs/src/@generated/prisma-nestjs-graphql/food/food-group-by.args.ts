import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodWhereInput } from './food-where.input';
import { FoodOrderByWithAggregationInput } from './food-order-by-with-aggregation.input';
import { FoodScalarFieldEnum } from './food-scalar-field.enum';
import { FoodScalarWhereWithAggregatesInput } from './food-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FoodCountAggregateInput } from './food-count-aggregate.input';
import { FoodAvgAggregateInput } from './food-avg-aggregate.input';
import { FoodSumAggregateInput } from './food-sum-aggregate.input';
import { FoodMinAggregateInput } from './food-min-aggregate.input';
import { FoodMaxAggregateInput } from './food-max-aggregate.input';

@ArgsType()
export class FoodGroupByArgs {

    @Field(() => FoodWhereInput, {nullable:true})
    where?: FoodWhereInput;

    @Field(() => [FoodOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FoodOrderByWithAggregationInput>;

    @Field(() => [FoodScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FoodScalarFieldEnum>;

    @Field(() => FoodScalarWhereWithAggregatesInput, {nullable:true})
    having?: FoodScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FoodCountAggregateInput, {nullable:true})
    _count?: FoodCountAggregateInput;

    @Field(() => FoodAvgAggregateInput, {nullable:true})
    _avg?: FoodAvgAggregateInput;

    @Field(() => FoodSumAggregateInput, {nullable:true})
    _sum?: FoodSumAggregateInput;

    @Field(() => FoodMinAggregateInput, {nullable:true})
    _min?: FoodMinAggregateInput;

    @Field(() => FoodMaxAggregateInput, {nullable:true})
    _max?: FoodMaxAggregateInput;
}
