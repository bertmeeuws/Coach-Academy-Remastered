import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationsCountAggregate } from './notifications-count-aggregate.output';
import { NotificationsAvgAggregate } from './notifications-avg-aggregate.output';
import { NotificationsSumAggregate } from './notifications-sum-aggregate.output';
import { NotificationsMinAggregate } from './notifications-min-aggregate.output';
import { NotificationsMaxAggregate } from './notifications-max-aggregate.output';

@ObjectType()
export class AggregateNotifications {

    @Field(() => NotificationsCountAggregate, {nullable:true})
    _count?: NotificationsCountAggregate;

    @Field(() => NotificationsAvgAggregate, {nullable:true})
    _avg?: NotificationsAvgAggregate;

    @Field(() => NotificationsSumAggregate, {nullable:true})
    _sum?: NotificationsSumAggregate;

    @Field(() => NotificationsMinAggregate, {nullable:true})
    _min?: NotificationsMinAggregate;

    @Field(() => NotificationsMaxAggregate, {nullable:true})
    _max?: NotificationsMaxAggregate;
}
