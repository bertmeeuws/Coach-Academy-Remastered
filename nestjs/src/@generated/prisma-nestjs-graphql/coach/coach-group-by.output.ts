import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CoachCountAggregate } from './coach-count-aggregate.output';
import { CoachAvgAggregate } from './coach-avg-aggregate.output';
import { CoachSumAggregate } from './coach-sum-aggregate.output';
import { CoachMinAggregate } from './coach-min-aggregate.output';
import { CoachMaxAggregate } from './coach-max-aggregate.output';

@ObjectType()
export class CoachGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    surname!: string;

    @Field(() => String, {nullable:false})
    name!: string;

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
