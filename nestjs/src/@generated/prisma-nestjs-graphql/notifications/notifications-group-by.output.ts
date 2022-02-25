import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NOTIFICATION_TYPE } from '../prisma/notification-type.enum';
import { Int } from '@nestjs/graphql';
import { NotificationsCountAggregate } from './notifications-count-aggregate.output';
import { NotificationsAvgAggregate } from './notifications-avg-aggregate.output';
import { NotificationsSumAggregate } from './notifications-sum-aggregate.output';
import { NotificationsMinAggregate } from './notifications-min-aggregate.output';
import { NotificationsMaxAggregate } from './notifications-max-aggregate.output';

@ObjectType()
export class NotificationsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => NOTIFICATION_TYPE, {nullable:false})
    type!: keyof typeof NOTIFICATION_TYPE;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    read!: boolean;

    @Field(() => String, {nullable:true})
    content?: string;

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
