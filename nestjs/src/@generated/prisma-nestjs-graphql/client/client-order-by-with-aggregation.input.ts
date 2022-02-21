import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClientCountOrderByAggregateInput } from './client-count-order-by-aggregate.input';
import { ClientAvgOrderByAggregateInput } from './client-avg-order-by-aggregate.input';
import { ClientMaxOrderByAggregateInput } from './client-max-order-by-aggregate.input';
import { ClientMinOrderByAggregateInput } from './client-min-order-by-aggregate.input';
import { ClientSumOrderByAggregateInput } from './client-sum-order-by-aggregate.input';

@InputType()
export class ClientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    surname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dob?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coachId?: keyof typeof SortOrder;

    @Field(() => ClientCountOrderByAggregateInput, {nullable:true})
    _count?: ClientCountOrderByAggregateInput;

    @Field(() => ClientAvgOrderByAggregateInput, {nullable:true})
    _avg?: ClientAvgOrderByAggregateInput;

    @Field(() => ClientMaxOrderByAggregateInput, {nullable:true})
    _max?: ClientMaxOrderByAggregateInput;

    @Field(() => ClientMinOrderByAggregateInput, {nullable:true})
    _min?: ClientMinOrderByAggregateInput;

    @Field(() => ClientSumOrderByAggregateInput, {nullable:true})
    _sum?: ClientSumOrderByAggregateInput;
}
