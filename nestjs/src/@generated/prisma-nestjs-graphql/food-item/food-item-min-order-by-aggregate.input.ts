import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FoodItemMinOrderByAggregateInput {

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
}
