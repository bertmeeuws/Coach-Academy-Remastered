import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MealCountOrderByAggregateInput } from './meal-count-order-by-aggregate.input';
import { MealMaxOrderByAggregateInput } from './meal-max-order-by-aggregate.input';
import { MealMinOrderByAggregateInput } from './meal-min-order-by-aggregate.input';

@InputType()
export class MealOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dietplanId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;

    @Field(() => MealCountOrderByAggregateInput, {nullable:true})
    _count?: MealCountOrderByAggregateInput;

    @Field(() => MealMaxOrderByAggregateInput, {nullable:true})
    _max?: MealMaxOrderByAggregateInput;

    @Field(() => MealMinOrderByAggregateInput, {nullable:true})
    _min?: MealMinOrderByAggregateInput;
}
