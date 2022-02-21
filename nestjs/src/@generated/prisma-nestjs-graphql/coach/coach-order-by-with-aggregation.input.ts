import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CoachCountOrderByAggregateInput } from './coach-count-order-by-aggregate.input';
import { CoachAvgOrderByAggregateInput } from './coach-avg-order-by-aggregate.input';
import { CoachMaxOrderByAggregateInput } from './coach-max-order-by-aggregate.input';
import { CoachMinOrderByAggregateInput } from './coach-min-order-by-aggregate.input';
import { CoachSumOrderByAggregateInput } from './coach-sum-order-by-aggregate.input';

@InputType()
export class CoachOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    surname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => CoachCountOrderByAggregateInput, {nullable:true})
    _count?: CoachCountOrderByAggregateInput;

    @Field(() => CoachAvgOrderByAggregateInput, {nullable:true})
    _avg?: CoachAvgOrderByAggregateInput;

    @Field(() => CoachMaxOrderByAggregateInput, {nullable:true})
    _max?: CoachMaxOrderByAggregateInput;

    @Field(() => CoachMinOrderByAggregateInput, {nullable:true})
    _min?: CoachMinOrderByAggregateInput;

    @Field(() => CoachSumOrderByAggregateInput, {nullable:true})
    _sum?: CoachSumOrderByAggregateInput;
}
