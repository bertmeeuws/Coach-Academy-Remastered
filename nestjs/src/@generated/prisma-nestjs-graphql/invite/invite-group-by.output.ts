import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InviteCountAggregate } from './invite-count-aggregate.output';
import { InviteAvgAggregate } from './invite-avg-aggregate.output';
import { InviteSumAggregate } from './invite-sum-aggregate.output';
import { InviteMinAggregate } from './invite-min-aggregate.output';
import { InviteMaxAggregate } from './invite-max-aggregate.output';

@ObjectType()
export class InviteGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    coachId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    invalidated?: Date | string;

    @Field(() => InviteCountAggregate, {nullable:true})
    _count?: InviteCountAggregate;

    @Field(() => InviteAvgAggregate, {nullable:true})
    _avg?: InviteAvgAggregate;

    @Field(() => InviteSumAggregate, {nullable:true})
    _sum?: InviteSumAggregate;

    @Field(() => InviteMinAggregate, {nullable:true})
    _min?: InviteMinAggregate;

    @Field(() => InviteMaxAggregate, {nullable:true})
    _max?: InviteMaxAggregate;
}
