import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { MealUpdateManyWithoutFoodsInput } from '../meal/meal-update-many-without-foods.input';
import { FoodUpdateOneRequiredWithoutFoodItemInput } from '../food/food-update-one-required-without-food-item.input';

@InputType()
export class FoodItemUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amount?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mealId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => MealUpdateManyWithoutFoodsInput, {nullable:true})
    Meal?: MealUpdateManyWithoutFoodsInput;

    @Field(() => FoodUpdateOneRequiredWithoutFoodItemInput, {nullable:true})
    food?: FoodUpdateOneRequiredWithoutFoodItemInput;
}
