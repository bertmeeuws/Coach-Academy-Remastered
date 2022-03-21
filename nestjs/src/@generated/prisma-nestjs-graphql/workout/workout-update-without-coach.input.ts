import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ExerciseInWorkoutUpdateManyWithoutWorkoutInput } from '../exercise-in-workout/exercise-in-workout-update-many-without-workout.input';
import { ClientUpdateOneRequiredWithoutWorkoutInput } from '../client/client-update-one-required-without-workout.input';

@InputType()
export class WorkoutUpdateWithoutCoachInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ExerciseInWorkoutUpdateManyWithoutWorkoutInput, {nullable:true})
    exercises?: ExerciseInWorkoutUpdateManyWithoutWorkoutInput;

    @Field(() => ClientUpdateOneRequiredWithoutWorkoutInput, {nullable:true})
    client?: ClientUpdateOneRequiredWithoutWorkoutInput;
}
