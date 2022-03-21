import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ExerciseCount {

    @Field(() => Int, {nullable:false})
    ExerciseInWorkout?: number;
}
