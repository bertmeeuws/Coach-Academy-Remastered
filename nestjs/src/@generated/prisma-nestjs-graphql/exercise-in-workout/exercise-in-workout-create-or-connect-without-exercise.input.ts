import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';
import { ExerciseInWorkoutCreateWithoutExerciseInput } from './exercise-in-workout-create-without-exercise.input';

@InputType()
export class ExerciseInWorkoutCreateOrConnectWithoutExerciseInput {

    @Field(() => ExerciseInWorkoutWhereUniqueInput, {nullable:false})
    where!: ExerciseInWorkoutWhereUniqueInput;

    @Field(() => ExerciseInWorkoutCreateWithoutExerciseInput, {nullable:false})
    create!: ExerciseInWorkoutCreateWithoutExerciseInput;
}
