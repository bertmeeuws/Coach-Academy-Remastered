import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CoachUpdateOneRequiredWithoutDietplanInput } from '../coach/coach-update-one-required-without-dietplan.input';
import { MealUpdateManyWithoutDietplanInput } from '../meal/meal-update-many-without-dietplan.input';

@InputType()
export class DietplanUpdateWithoutClientInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => CoachUpdateOneRequiredWithoutDietplanInput, {nullable:true})
    coach?: CoachUpdateOneRequiredWithoutDietplanInput;

    @Field(() => MealUpdateManyWithoutDietplanInput, {nullable:true})
    Meal?: MealUpdateManyWithoutDietplanInput;
}
