import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FoodItemOrderByRelationAggregateInput } from '../food-item/food-item-order-by-relation-aggregate.input';

@InputType()
export class FoodOrderByWithRelationInput {

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

    @Field(() => FoodItemOrderByRelationAggregateInput, {nullable:true})
    FoodItem?: FoodItemOrderByRelationAggregateInput;
}
