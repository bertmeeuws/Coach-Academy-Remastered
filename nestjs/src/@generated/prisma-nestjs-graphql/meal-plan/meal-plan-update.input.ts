import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CoachUpdateOneRequiredWithoutMealPlanInput } from '../coach/coach-update-one-required-without-meal-plan.input';

@InputType()
export class MealPlanUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => CoachUpdateOneRequiredWithoutMealPlanInput, {nullable:true})
    coach?: CoachUpdateOneRequiredWithoutMealPlanInput;
}
