import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutCreateNestedManyWithoutWorkoutInput } from '../exercise-in-workout/exercise-in-workout-create-nested-many-without-workout.input';
import { CoachCreateNestedOneWithoutWorkoutInput } from '../coach/coach-create-nested-one-without-workout.input';

@InputType()
export class WorkoutCreateWithoutClientInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    day!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ExerciseInWorkoutCreateNestedManyWithoutWorkoutInput, {nullable:true})
    exercises?: ExerciseInWorkoutCreateNestedManyWithoutWorkoutInput;

    @Field(() => CoachCreateNestedOneWithoutWorkoutInput, {nullable:false})
    coach!: CoachCreateNestedOneWithoutWorkoutInput;
}
