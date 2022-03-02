import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FoodItemCountOrderByAggregateInput } from './food-item-count-order-by-aggregate.input';
import { FoodItemMaxOrderByAggregateInput } from './food-item-max-order-by-aggregate.input';
import { FoodItemMinOrderByAggregateInput } from './food-item-min-order-by-aggregate.input';

@InputType()
export class FoodItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mealId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;

    @Field(() => FoodItemCountOrderByAggregateInput, {nullable:true})
    _count?: FoodItemCountOrderByAggregateInput;

    @Field(() => FoodItemMaxOrderByAggregateInput, {nullable:true})
    _max?: FoodItemMaxOrderByAggregateInput;

    @Field(() => FoodItemMinOrderByAggregateInput, {nullable:true})
    _min?: FoodItemMinOrderByAggregateInput;
}
