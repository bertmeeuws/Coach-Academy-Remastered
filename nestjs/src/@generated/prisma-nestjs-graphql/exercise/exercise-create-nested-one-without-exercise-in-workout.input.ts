import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseCreateWithoutExerciseInWorkoutInput } from './exercise-create-without-exercise-in-workout.input';
import { ExerciseCreateOrConnectWithoutExerciseInWorkoutInput } from './exercise-create-or-connect-without-exercise-in-workout.input';
import { ExerciseWhereUniqueInput } from './exercise-where-unique.input';

@InputType()
export class ExerciseCreateNestedOneWithoutExerciseInWorkoutInput {

    @Field(() => ExerciseCreateWithoutExerciseInWorkoutInput, {nullable:true})
    create?: ExerciseCreateWithoutExerciseInWorkoutInput;

    @Field(() => ExerciseCreateOrConnectWithoutExerciseInWorkoutInput, {nullable:true})
    connectOrCreate?: ExerciseCreateOrConnectWithoutExerciseInWorkoutInput;

    @Field(() => ExerciseWhereUniqueInput, {nullable:true})
    connect?: ExerciseWhereUniqueInput;
}
