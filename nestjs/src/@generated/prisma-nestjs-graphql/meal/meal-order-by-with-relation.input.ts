import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DietplanOrderByWithRelationInput } from '../dietplan/dietplan-order-by-with-relation.input';
import { FoodItemOrderByRelationAggregateInput } from '../food-item/food-item-order-by-relation-aggregate.input';

@InputType()
export class MealOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => DietplanOrderByWithRelationInput, {nullable:true})
    dietplan?: DietplanOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    dietplanId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;

    @Field(() => FoodItemOrderByRelationAggregateInput, {nullable:true})
    foods?: FoodItemOrderByRelationAggregateInput;
}
