import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateNestedOneWithoutWorkoutInput } from '../coach/coach-create-nested-one-without-workout.input';
import { ClientCreateNestedOneWithoutWorkoutInput } from '../client/client-create-nested-one-without-workout.input';

@InputType()
export class WorkoutCreateWithoutExercisesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    day!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CoachCreateNestedOneWithoutWorkoutInput, {nullable:false})
    coach!: CoachCreateNestedOneWithoutWorkoutInput;

    @Field(() => ClientCreateNestedOneWithoutWorkoutInput, {nullable:false})
    client!: ClientCreateNestedOneWithoutWorkoutInput;
}
