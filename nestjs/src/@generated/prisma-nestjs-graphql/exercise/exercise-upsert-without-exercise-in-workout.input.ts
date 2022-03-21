import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseUpdateWithoutExerciseInWorkoutInput } from './exercise-update-without-exercise-in-workout.input';
import { ExerciseCreateWithoutExerciseInWorkoutInput } from './exercise-create-without-exercise-in-workout.input';

@InputType()
export class ExerciseUpsertWithoutExerciseInWorkoutInput {

    @Field(() => ExerciseUpdateWithoutExerciseInWorkoutInput, {nullable:false})
    update!: ExerciseUpdateWithoutExerciseInWorkoutInput;

    @Field(() => ExerciseCreateWithoutExerciseInWorkoutInput, {nullable:false})
    create!: ExerciseCreateWithoutExerciseInWorkoutInput;
}
