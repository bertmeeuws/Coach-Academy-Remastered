import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClientOrderByWithRelationInput } from '../client/client-order-by-with-relation.input';
import { CoachOrderByWithRelationInput } from '../coach/coach-order-by-with-relation.input';
import { NotificationsOrderByRelationAggregateInput } from '../notifications/notifications-order-by-relation-aggregate.input';

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

    @Field(() => ClientOrderByWithRelationInput, {nullable:true})
    client?: ClientOrderByWithRelationInput;

    @Field(() => CoachOrderByWithRelationInput, {nullable:true})
    coach?: CoachOrderByWithRelationInput;

    @Field(() => NotificationsOrderByRelationAggregateInput, {nullable:true})
    Notifications?: NotificationsOrderByRelationAggregateInput;
}
