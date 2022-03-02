import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FoodItemAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    carbs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    protein?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fat?: keyof typeof SortOrder;
}
