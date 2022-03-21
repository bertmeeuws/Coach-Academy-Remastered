import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseCreateWithoutExerciseInWorkoutInput } from './exercise-create-without-exercise-in-workout.input';
import { ExerciseCreateOrConnectWithoutExerciseInWorkoutInput } from './exercise-create-or-connect-without-exercise-in-workout.input';
import { ExerciseUpsertWithoutExerciseInWorkoutInput } from './exercise-upsert-without-exercise-in-workout.input';
import { ExerciseWhereUniqueInput } from './exercise-where-unique.input';
import { ExerciseUpdateWithoutExerciseInWorkoutInput } from './exercise-update-without-exercise-in-workout.input';

@InputType()
export class ExerciseUpdateOneRequiredWithoutExerciseInWorkoutInput {

    @Field(() => ExerciseCreateWithoutExerciseInWorkoutInput, {nullable:true})
    create?: ExerciseCreateWithoutExerciseInWorkoutInput;

    @Field(() => ExerciseCreateOrConnectWithoutExerciseInWorkoutInput, {nullable:true})
    connectOrCreate?: ExerciseCreateOrConnectWithoutExerciseInWorkoutInput;

    @Field(() => ExerciseUpsertWithoutExerciseInWorkoutInput, {nullable:true})
    upsert?: ExerciseUpsertWithoutExerciseInWorkoutInput;

    @Field(() => ExerciseWhereUniqueInput, {nullable:true})
    connect?: ExerciseWhereUniqueInput;

    @Field(() => ExerciseUpdateWithoutExerciseInWorkoutInput, {nullable:true})
    update?: ExerciseUpdateWithoutExerciseInWorkoutInput;
}
