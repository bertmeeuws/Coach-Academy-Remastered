import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CoachUpdateOneRequiredWithoutWorkoutInput } from '../coach/coach-update-one-required-without-workout.input';
import { ClientUpdateOneRequiredWithoutWorkoutInput } from '../client/client-update-one-required-without-workout.input';

@InputType()
export class WorkoutUpdateWithoutExercisesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CoachUpdateOneRequiredWithoutWorkoutInput, {nullable:true})
    coach?: CoachUpdateOneRequiredWithoutWorkoutInput;

    @Field(() => ClientUpdateOneRequiredWithoutWorkoutInput, {nullable:true})
    client?: ClientUpdateOneRequiredWithoutWorkoutInput;
}
