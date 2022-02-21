import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CoachCountAggregate } from './coach-count-aggregate.output';
import { CoachAvgAggregate } from './coach-avg-aggregate.output';
import { CoachSumAggregate } from './coach-sum-aggregate.output';
import { CoachMinAggregate } from './coach-min-aggregate.output';
import { CoachMaxAggregate } from './coach-max-aggregate.output';

@ObjectType()
export class AggregateCoach {

    @Field(() => CoachCountAggregate, {nullable:true})
    _count?: CoachCountAggregate;

    @Field(() => CoachAvgAggregate, {nullable:true})
    _avg?: CoachAvgAggregate;

    @Field(() => CoachSumAggregate, {nullable:true})
    _sum?: CoachSumAggregate;

    @Field(() => CoachMinAggregate, {nullable:true})
    _min?: CoachMinAggregate;

    @Field(() => CoachMaxAggregate, {nullable:true})
    _max?: CoachMaxAggregate;
}
