import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumMEAL_DAYFieldUpdateOperationsInput } from '../prisma/enum-meal-day-field-update-operations.input';
import { FoodItemUpdateManyWithoutMealInput } from '../food-item/food-item-update-many-without-meal.input';

@InputType()
export class MealUpdateWithoutDietplanInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumMEAL_DAYFieldUpdateOperationsInput, {nullable:true})
    day?: EnumMEAL_DAYFieldUpdateOperationsInput;

    @Field(() => FoodItemUpdateManyWithoutMealInput, {nullable:true})
    foods?: FoodItemUpdateManyWithoutMealInput;
}
