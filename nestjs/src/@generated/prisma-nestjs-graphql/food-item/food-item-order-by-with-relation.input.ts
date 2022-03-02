import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MealOrderByRelationAggregateInput } from '../meal/meal-order-by-relation-aggregate.input';
import { FoodOrderByWithRelationInput } from '../food/food-order-by-with-relation.input';

@InputType()
export class FoodItemOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => MealOrderByRelationAggregateInput, {nullable:true})
    Meal?: MealOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    mealId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notes?: keyof typeof SortOrder;

    @Field(() => FoodOrderByWithRelationInput, {nullable:true})
    food?: FoodOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;
}
