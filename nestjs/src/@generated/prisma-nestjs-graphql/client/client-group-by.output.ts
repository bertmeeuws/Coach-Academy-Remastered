import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ClientCountAggregate } from './client-count-aggregate.output';
import { ClientAvgAggregate } from './client-avg-aggregate.output';
import { ClientSumAggregate } from './client-sum-aggregate.output';
import { ClientMinAggregate } from './client-min-aggregate.output';
import { ClientMaxAggregate } from './client-max-aggregate.output';

@ObjectType()
export class ClientGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    surname!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    dob?: Date | string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Int, {nullable:true})
    number?: number;

    @Field(() => Int, {nullable:true})
    postal?: number;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => Int, {nullable:true})
    coachId?: number;

    @Field(() => String, {nullable:true})
    inviteId?: string;

    @Field(() => ClientCountAggregate, {nullable:true})
    _count?: ClientCountAggregate;

    @Field(() => ClientAvgAggregate, {nullable:true})
    _avg?: ClientAvgAggregate;

    @Field(() => ClientSumAggregate, {nullable:true})
    _sum?: ClientSumAggregate;

    @Field(() => ClientMinAggregate, {nullable:true})
    _min?: ClientMinAggregate;

    @Field(() => ClientMaxAggregate, {nullable:true})
    _max?: ClientMaxAggregate;
}
