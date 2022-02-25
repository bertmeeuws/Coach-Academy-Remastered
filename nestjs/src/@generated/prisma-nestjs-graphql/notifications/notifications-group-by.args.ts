import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationsWhereInput } from './notifications-where.input';
import { NotificationsOrderByWithAggregationInput } from './notifications-order-by-with-aggregation.input';
import { NotificationsScalarFieldEnum } from './notifications-scalar-field.enum';
import { NotificationsScalarWhereWithAggregatesInput } from './notifications-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NotificationsCountAggregateInput } from './notifications-count-aggregate.input';
import { NotificationsAvgAggregateInput } from './notifications-avg-aggregate.input';
import { NotificationsSumAggregateInput } from './notifications-sum-aggregate.input';
import { NotificationsMinAggregateInput } from './notifications-min-aggregate.input';
import { NotificationsMaxAggregateInput } from './notifications-max-aggregate.input';

@ArgsType()
export class NotificationsGroupByArgs {

    @Field(() => NotificationsWhereInput, {nullable:true})
    where?: NotificationsWhereInput;

    @Field(() => [NotificationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NotificationsOrderByWithAggregationInput>;

    @Field(() => [NotificationsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NotificationsScalarFieldEnum>;

    @Field(() => NotificationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: NotificationsScalarWhereWithAggregatesInput;

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
