import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Exercise } from '../exercise/exercise.model';
import { GraphQLJSON } from 'graphql-type-json';
import { Workout } from '../workout/workout.model';

@ObjectType()
export class ExerciseInWorkout {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Exercise, {nullable:false})
    exercise?: Exercise;

    @Field(() => String, {nullable:false})
    exerciseId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    meta!: any;

    @Field(() => Workout, {nullable:true})
    Workout?: Workout | null;

    @Field(() => String, {nullable:true})
    workoutId!: string | null;
}
