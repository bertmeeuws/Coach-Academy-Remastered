import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationsWhereInput } from './notifications-where.input';
import { NotificationsOrderByWithRelationInput } from './notifications-order-by-with-relation.input';
import { NotificationsWhereUniqueInput } from './notifications-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotificationsCountAggregateInput } from './notifications-count-aggregate.input';
import { NotificationsAvgAggregateInput } from './notifications-avg-aggregate.input';
import { NotificationsSumAggregateInput } from './notifications-sum-aggregate.input';
import { NotificationsMinAggregateInput } from './notifications-min-aggregate.input';
import { NotificationsMaxAggregateInput } from './notifications-max-aggregate.input';

@ArgsType()
export class NotificationsAggregateArgs {

    @Field(() => NotificationsWhereInput, {nullable:true})
    where?: NotificationsWhereInput;

    @Field(() => [NotificationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationsOrderByWithRelationInput>;

    @Field(() => NotificationsWhereUniqueInput, {nullable:true})
    cursor?: NotificationsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NotificationsCountAggregateInput, {nullable:true})
    _count?: NotificationsCountAggregateInput;

    @Field(() => NotificationsAvgAggregateInput, {nullable:true})
    _avg?: NotificationsAvgAggregateInput;

    @Field(() => NotificationsSumAggregateInput, {nullable:true})
    _sum?: NotificationsSumAggregateInput;

    @Field(() => NotificationsMinAggregateInput, {nullable:true})
    _min?: NotificationsMinAggregateInput;

    @Field(() => NotificationsMaxAggregateInput, {nullable:true})
    _max?: NotificationsMaxAggregateInput;
}
