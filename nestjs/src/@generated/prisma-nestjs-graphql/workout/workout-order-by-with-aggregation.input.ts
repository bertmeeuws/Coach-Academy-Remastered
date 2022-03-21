import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkoutCountOrderByAggregateInput } from './workout-count-order-by-aggregate.input';
import { WorkoutAvgOrderByAggregateInput } from './workout-avg-order-by-aggregate.input';
import { WorkoutMaxOrderByAggregateInput } from './workout-max-order-by-aggregate.input';
import { WorkoutMinOrderByAggregateInput } from './workout-min-order-by-aggregate.input';
import { WorkoutSumOrderByAggregateInput } from './workout-sum-order-by-aggregate.input';

@InputType()
export class WorkoutOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coachId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => WorkoutCountOrderByAggregateInput, {nullable:true})
    _count?: WorkoutCountOrderByAggregateInput;

    @Field(() => WorkoutAvgOrderByAggregateInput, {nullable:true})
    _avg?: WorkoutAvgOrderByAggregateInput;

    @Field(() => WorkoutMaxOrderByAggregateInput, {nullable:true})
    _max?: WorkoutMaxOrderByAggregateInput;

    @Field(() => WorkoutMinOrderByAggregateInput, {nullable:true})
    _min?: WorkoutMinOrderByAggregateInput;

    @Field(() => WorkoutSumOrderByAggregateInput, {nullable:true})
    _sum?: WorkoutSumOrderByAggregateInput;
}
