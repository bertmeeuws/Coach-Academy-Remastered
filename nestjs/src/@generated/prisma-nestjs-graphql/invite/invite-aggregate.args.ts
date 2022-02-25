import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InviteWhereInput } from './invite-where.input';
import { InviteOrderByWithRelationInput } from './invite-order-by-with-relation.input';
import { InviteWhereUniqueInput } from './invite-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InviteCountAggregateInput } from './invite-count-aggregate.input';
import { InviteAvgAggregateInput } from './invite-avg-aggregate.input';
import { InviteSumAggregateInput } from './invite-sum-aggregate.input';
import { InviteMinAggregateInput } from './invite-min-aggregate.input';
import { InviteMaxAggregateInput } from './invite-max-aggregate.input';

@ArgsType()
export class InviteAggregateArgs {

    @Field(() => InviteWhereInput, {nullable:true})
    where?: InviteWhereInput;

    @Field(() => [InviteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InviteOrderByWithRelationInput>;

    @Field(() => InviteWhereUniqueInput, {nullable:true})
    cursor?: InviteWhereUniqueInput;

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
