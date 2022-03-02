import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CoachOrderByWithRelationInput } from '../coach/coach-order-by-with-relation.input';
import { InviteOrderByWithRelationInput } from '../invite/invite-order-by-with-relation.input';
import { DietplanOrderByRelationAggregateInput } from '../dietplan/dietplan-order-by-relation-aggregate.input';

@InputType()
export class ClientOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

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

    @Field(() => CoachOrderByWithRelationInput, {nullable:true})
    coach?: CoachOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    coachId?: keyof typeof SortOrder;

    @Field(() => InviteOrderByWithRelationInput, {nullable:true})
    invite?: InviteOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    inviteId?: keyof typeof SortOrder;

    @Field(() => DietplanOrderByRelationAggregateInput, {nullable:true})
    Dietplan?: DietplanOrderByRelationAggregateInput;
}
