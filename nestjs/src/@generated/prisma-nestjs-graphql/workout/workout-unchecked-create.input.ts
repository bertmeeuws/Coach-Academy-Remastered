import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ExerciseInWorkoutUncheckedCreateNestedManyWithoutWorkoutInput } from '../exercise-in-workout/exercise-in-workout-unchecked-create-nested-many-without-workout.input';

@InputType()
export class WorkoutUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    day!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Int, {nullable:false})
    coachId!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => ExerciseInWorkoutUncheckedCreateNestedManyWithoutWorkoutInput, {nullable:true})
    exercises?: ExerciseInWorkoutUncheckedCreateNestedManyWithoutWorkoutInput;
}
