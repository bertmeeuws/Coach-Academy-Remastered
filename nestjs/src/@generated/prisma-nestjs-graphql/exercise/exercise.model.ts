import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MUSCLE_GROUP } from '../prisma/muscle-group.enum';
import { ExerciseInWorkout } from '../exercise-in-workout/exercise-in-workout.model';
import { ExerciseCount } from './exercise-count.output';

@ObjectType()
export class Exercise {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => MUSCLE_GROUP, {nullable:false})
    primary_muscle!: keyof typeof MUSCLE_GROUP;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    video!: string | null;

    @Field(() => [MUSCLE_GROUP], {nullable:true})
    secondary_muscles!: Array<keyof typeof MUSCLE_GROUP>;

    @Field(() => [ExerciseInWorkout], {nullable:true})
    ExerciseInWorkout?: Array<ExerciseInWorkout>;

    @Field(() => ExerciseCount, {nullable:false})
    _count?: ExerciseCount;
}
