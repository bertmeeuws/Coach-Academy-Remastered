import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkoutCountAggregate } from './workout-count-aggregate.output';
import { WorkoutAvgAggregate } from './workout-avg-aggregate.output';
import { WorkoutSumAggregate } from './workout-sum-aggregate.output';
import { WorkoutMinAggregate } from './workout-min-aggregate.output';
import { WorkoutMaxAggregate } from './workout-max-aggregate.output';

@ObjectType()
export class WorkoutGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    day!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Int, {nullable:false})
    coachId!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => WorkoutCountAggregate, {nullable:true})
    _count?: WorkoutCountAggregate;

    @Field(() => WorkoutAvgAggregate, {nullable:true})
    _avg?: WorkoutAvgAggregate;

    @Field(() => WorkoutSumAggregate, {nullable:true})
    _sum?: WorkoutSumAggregate;

    @Field(() => WorkoutMinAggregate, {nullable:true})
    _min?: WorkoutMinAggregate;

    @Field(() => WorkoutMaxAggregate, {nullable:true})
    _max?: WorkoutMaxAggregate;
}
