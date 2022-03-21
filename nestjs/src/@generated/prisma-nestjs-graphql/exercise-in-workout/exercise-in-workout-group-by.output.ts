import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ExerciseInWorkoutCountAggregate } from './exercise-in-workout-count-aggregate.output';
import { ExerciseInWorkoutAvgAggregate } from './exercise-in-workout-avg-aggregate.output';
import { ExerciseInWorkoutSumAggregate } from './exercise-in-workout-sum-aggregate.output';
import { ExerciseInWorkoutMinAggregate } from './exercise-in-workout-min-aggregate.output';
import { ExerciseInWorkoutMaxAggregate } from './exercise-in-workout-max-aggregate.output';

@ObjectType()
export class ExerciseInWorkoutGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    exerciseId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    meta!: any;

    @Field(() => String, {nullable:true})
    workoutId?: string;

    @Field(() => ExerciseInWorkoutCountAggregate, {nullable:true})
    _count?: ExerciseInWorkoutCountAggregate;

    @Field(() => ExerciseInWorkoutAvgAggregate, {nullable:true})
    _avg?: ExerciseInWorkoutAvgAggregate;

    @Field(() => ExerciseInWorkoutSumAggregate, {nullable:true})
    _sum?: ExerciseInWorkoutSumAggregate;

    @Field(() => ExerciseInWorkoutMinAggregate, {nullable:true})
    _min?: ExerciseInWorkoutMinAggregate;

    @Field(() => ExerciseInWorkoutMaxAggregate, {nullable:true})
    _max?: ExerciseInWorkoutMaxAggregate;
}
