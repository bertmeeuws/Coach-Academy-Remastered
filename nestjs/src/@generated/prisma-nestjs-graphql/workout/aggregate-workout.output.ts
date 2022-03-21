import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkoutCountAggregate } from './workout-count-aggregate.output';
import { WorkoutAvgAggregate } from './workout-avg-aggregate.output';
import { WorkoutSumAggregate } from './workout-sum-aggregate.output';
import { WorkoutMinAggregate } from './workout-min-aggregate.output';
import { WorkoutMaxAggregate } from './workout-max-aggregate.output';

@ObjectType()
export class AggregateWorkout {

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
