import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumMEAL_DAYFieldUpdateOperationsInput } from '../prisma/enum-meal-day-field-update-operations.input';

@InputType()
export class MealUncheckedUpdateWithoutDietplanInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumMEAL_DAYFieldUpdateOperationsInput, {nullable:true})
    day?: EnumMEAL_DAYFieldUpdateOperationsInput;
}
