import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumMUSCLE_GROUPFieldUpdateOperationsInput } from '../prisma/enum-muscle-group-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ExerciseUpdatesecondary_musclesInput } from '../prisma/exercise-updatesecondary-muscles.input';

@InputType()
export class ExerciseUncheckedUpdateWithoutExerciseInWorkoutInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumMUSCLE_GROUPFieldUpdateOperationsInput, {nullable:true})
    primary_muscle?: EnumMUSCLE_GROUPFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    video?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ExerciseUpdatesecondary_musclesInput, {nullable:true})
    secondary_muscles?: ExerciseUpdatesecondary_musclesInput;
}
