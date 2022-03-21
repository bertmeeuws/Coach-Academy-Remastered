import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ExerciseInWorkoutUncheckedUpdateManyWithoutWorkoutInput } from '../exercise-in-workout/exercise-in-workout-unchecked-update-many-without-workout.input';

@InputType()
export class WorkoutUncheckedUpdateWithoutCoachInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    day?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    clientId?: IntFieldUpdateOperationsInput;

    @Field(() => ExerciseInWorkoutUncheckedUpdateManyWithoutWorkoutInput, {nullable:true})
    exercises?: ExerciseInWorkoutUncheckedUpdateManyWithoutWorkoutInput;
}
