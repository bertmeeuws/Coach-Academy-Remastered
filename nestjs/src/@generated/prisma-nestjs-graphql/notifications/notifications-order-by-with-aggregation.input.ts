import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NotificationsCountOrderByAggregateInput } from './notifications-count-order-by-aggregate.input';
import { NotificationsAvgOrderByAggregateInput } from './notifications-avg-order-by-aggregate.input';
import { NotificationsMaxOrderByAggregateInput } from './notifications-max-order-by-aggregate.input';
import { NotificationsMinOrderByAggregateInput } from './notifications-min-order-by-aggregate.input';
import { NotificationsSumOrderByAggregateInput } from './notifications-sum-order-by-aggregate.input';

@InputType()
export class NotificationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    read?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => NotificationsCountOrderByAggregateInput, {nullable:true})
    _count?: NotificationsCountOrderByAggregateInput;

    @Field(() => NotificationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: NotificationsAvgOrderByAggregateInput;

    @Field(() => NotificationsMaxOrderByAggregateInput, {nullable:true})
    _max?: NotificationsMaxOrderByAggregateInput;

    @Field(() => NotificationsMinOrderByAggregateInput, {nullable:true})
    _min?: NotificationsMinOrderByAggregateInput;

    @Field(() => NotificationsSumOrderByAggregateInput, {nullable:true})
    _sum?: NotificationsSumOrderByAggregateInput;
}
