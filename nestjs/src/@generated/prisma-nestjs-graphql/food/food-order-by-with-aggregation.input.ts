import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FoodCountOrderByAggregateInput } from './food-count-order-by-aggregate.input';
import { FoodAvgOrderByAggregateInput } from './food-avg-order-by-aggregate.input';
import { FoodMaxOrderByAggregateInput } from './food-max-order-by-aggregate.input';
import { FoodMinOrderByAggregateInput } from './food-min-order-by-aggregate.input';
import { FoodSumOrderByAggregateInput } from './food-sum-order-by-aggregate.input';

@InputType()
export class FoodOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    carbs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    protein?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fat?: keyof typeof SortOrder;

    @Field(() => FoodCountOrderByAggregateInput, {nullable:true})
    _count?: FoodCountOrderByAggregateInput;

    @Field(() => FoodAvgOrderByAggregateInput, {nullable:true})
    _avg?: FoodAvgOrderByAggregateInput;

    @Field(() => FoodMaxOrderByAggregateInput, {nullable:true})
    _max?: FoodMaxOrderByAggregateInput;

    @Field(() => FoodMinOrderByAggregateInput, {nullable:true})
    _min?: FoodMinOrderByAggregateInput;

    @Field(() => FoodSumOrderByAggregateInput, {nullable:true})
    _sum?: FoodSumOrderByAggregateInput;
}
