import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutCreateNestedManyWithoutWorkoutInput } from '../exercise-in-workout/exercise-in-workout-create-nested-many-without-workout.input';
import { ClientCreateNestedOneWithoutWorkoutInput } from '../client/client-create-nested-one-without-workout.input';

@InputType()
export class WorkoutCreateWithoutCoachInput {

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

    @Field(() => ClientCreateNestedOneWithoutWorkoutInput, {nullable:false})
    client!: ClientCreateNestedOneWithoutWorkoutInput;
}
