import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClientCountAggregate } from './client-count-aggregate.output';
import { ClientAvgAggregate } from './client-avg-aggregate.output';
import { ClientSumAggregate } from './client-sum-aggregate.output';
import { ClientMinAggregate } from './client-min-aggregate.output';
import { ClientMaxAggregate } from './client-max-aggregate.output';

@ObjectType()
export class AggregateClient {

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
