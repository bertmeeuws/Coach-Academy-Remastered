import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';
import { ExerciseInWorkoutCreateWithoutWorkoutInput } from './exercise-in-workout-create-without-workout.input';

@InputType()
export class ExerciseInWorkoutCreateOrConnectWithoutWorkoutInput {

    @Field(() => ExerciseInWorkoutWhereUniqueInput, {nullable:false})
    where!: ExerciseInWorkoutWhereUniqueInput;

    @Field(() => ExerciseInWorkoutCreateWithoutWorkoutInput, {nullable:false})
    create!: ExerciseInWorkoutCreateWithoutWorkoutInput;
}
