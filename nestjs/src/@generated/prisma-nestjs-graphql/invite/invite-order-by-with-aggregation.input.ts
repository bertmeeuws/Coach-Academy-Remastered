import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { InviteCountOrderByAggregateInput } from './invite-count-order-by-aggregate.input';
import { InviteAvgOrderByAggregateInput } from './invite-avg-order-by-aggregate.input';
import { InviteMaxOrderByAggregateInput } from './invite-max-order-by-aggregate.input';
import { InviteMinOrderByAggregateInput } from './invite-min-order-by-aggregate.input';
import { InviteSumOrderByAggregateInput } from './invite-sum-order-by-aggregate.input';

@InputType()
export class InviteOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coachId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    invalidated?: keyof typeof SortOrder;

    @Field(() => InviteCountOrderByAggregateInput, {nullable:true})
    _count?: InviteCountOrderByAggregateInput;

    @Field(() => InviteAvgOrderByAggregateInput, {nullable:true})
    _avg?: InviteAvgOrderByAggregateInput;

    @Field(() => InviteMaxOrderByAggregateInput, {nullable:true})
    _max?: InviteMaxOrderByAggregateInput;

    @Field(() => InviteMinOrderByAggregateInput, {nullable:true})
    _min?: InviteMinOrderByAggregateInput;

    @Field(() => InviteSumOrderByAggregateInput, {nullable:true})
    _sum?: InviteSumOrderByAggregateInput;
}
