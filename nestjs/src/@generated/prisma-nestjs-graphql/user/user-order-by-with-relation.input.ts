import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClientOrderByRelationAggregateInput } from '../client/client-order-by-relation-aggregate.input';
import { CoachOrderByRelationAggregateInput } from '../coach/coach-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => ClientOrderByRelationAggregateInput, {nullable:true})
    Client?: ClientOrderByRelationAggregateInput;

    @Field(() => CoachOrderByRelationAggregateInput, {nullable:true})
    Coach?: CoachOrderByRelationAggregateInput;
}
