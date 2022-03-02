import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodWhereInput } from './food-where.input';
import { FoodOrderByWithRelationInput } from './food-order-by-with-relation.input';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FoodCountAggregateInput } from './food-count-aggregate.input';
import { FoodAvgAggregateInput } from './food-avg-aggregate.input';
import { FoodSumAggregateInput } from './food-sum-aggregate.input';
import { FoodMinAggregateInput } from './food-min-aggregate.input';
import { FoodMaxAggregateInput } from './food-max-aggregate.input';

@ArgsType()
export class FoodAggregateArgs {

    @Field(() => FoodWhereInput, {nullable:true})
    where?: FoodWhereInput;

    @Field(() => [FoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FoodOrderByWithRelationInput>;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    cursor?: FoodWhereUniqueInput;

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
