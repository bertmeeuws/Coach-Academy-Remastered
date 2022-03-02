import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DietplanCountOrderByAggregateInput } from './dietplan-count-order-by-aggregate.input';
import { DietplanAvgOrderByAggregateInput } from './dietplan-avg-order-by-aggregate.input';
import { DietplanMaxOrderByAggregateInput } from './dietplan-max-order-by-aggregate.input';
import { DietplanMinOrderByAggregateInput } from './dietplan-min-order-by-aggregate.input';
import { DietplanSumOrderByAggregateInput } from './dietplan-sum-order-by-aggregate.input';

@InputType()
export class DietplanOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coachId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => DietplanCountOrderByAggregateInput, {nullable:true})
    _count?: DietplanCountOrderByAggregateInput;

    @Field(() => DietplanAvgOrderByAggregateInput, {nullable:true})
    _avg?: DietplanAvgOrderByAggregateInput;

    @Field(() => DietplanMaxOrderByAggregateInput, {nullable:true})
    _max?: DietplanMaxOrderByAggregateInput;

    @Field(() => DietplanMinOrderByAggregateInput, {nullable:true})
    _min?: DietplanMinOrderByAggregateInput;

    @Field(() => DietplanSumOrderByAggregateInput, {nullable:true})
    _sum?: DietplanSumOrderByAggregateInput;
}
