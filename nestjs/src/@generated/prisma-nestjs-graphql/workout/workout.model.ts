import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ExerciseInWorkout } from '../exercise-in-workout/exercise-in-workout.model';
import { Coach } from '../coach/coach.model';
import { Int } from '@nestjs/graphql';
import { Client } from '../client/client.model';
import { WorkoutCount } from './workout-count.output';

@ObjectType()
export class Workout {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    day!: string;

    @Field(() => [ExerciseInWorkout], {nullable:true})
    exercises?: Array<ExerciseInWorkout>;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Coach, {nullable:false})
    coach?: Coach;

    @Field(() => Int, {nullable:false})
    coachId!: number;

    @Field(() => Client, {nullable:false})
    client?: Client;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => WorkoutCount, {nullable:false})
    _count?: WorkoutCount;
}
