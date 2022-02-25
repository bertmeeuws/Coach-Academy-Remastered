import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InviteWhereInput } from './invite-where.input';
import { InviteOrderByWithAggregationInput } from './invite-order-by-with-aggregation.input';
import { InviteScalarFieldEnum } from './invite-scalar-field.enum';
import { InviteScalarWhereWithAggregatesInput } from './invite-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { InviteCountAggregateInput } from './invite-count-aggregate.input';
import { InviteAvgAggregateInput } from './invite-avg-aggregate.input';
import { InviteSumAggregateInput } from './invite-sum-aggregate.input';
import { InviteMinAggregateInput } from './invite-min-aggregate.input';
import { InviteMaxAggregateInput } from './invite-max-aggregate.input';

@ArgsType()
export class InviteGroupByArgs {

    @Field(() => InviteWhereInput, {nullable:true})
    where?: InviteWhereInput;

    @Field(() => [InviteOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InviteOrderByWithAggregationInput>;

    @Field(() => [InviteScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof InviteScalarFieldEnum>;

    @Field(() => InviteScalarWhereWithAggregatesInput, {nullable:true})
    having?: InviteScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InviteCountAggregateInput, {nullable:true})
    _count?: InviteCountAggregateInput;

    @Field(() => InviteAvgAggregateInput, {nullable:true})
    _avg?: InviteAvgAggregateInput;

    @Field(() => InviteSumAggregateInput, {nullable:true})
    _sum?: InviteSumAggregateInput;

    @Field(() => InviteMinAggregateInput, {nullable:true})
    _min?: InviteMinAggregateInput;

    @Field(() => InviteMaxAggregateInput, {nullable:true})
    _max?: InviteMaxAggregateInput;
}
