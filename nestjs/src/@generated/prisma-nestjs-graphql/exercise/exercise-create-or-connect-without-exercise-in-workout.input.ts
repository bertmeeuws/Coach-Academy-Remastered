import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseWhereUniqueInput } from './exercise-where-unique.input';
import { ExerciseCreateWithoutExerciseInWorkoutInput } from './exercise-create-without-exercise-in-workout.input';

@InputType()
export class ExerciseCreateOrConnectWithoutExerciseInWorkoutInput {

    @Field(() => ExerciseWhereUniqueInput, {nullable:false})
    where!: ExerciseWhereUniqueInput;

    @Field(() => ExerciseCreateWithoutExerciseInWorkoutInput, {nullable:false})
    create!: ExerciseCreateWithoutExerciseInWorkoutInput;
}
