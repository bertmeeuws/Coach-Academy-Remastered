import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ClientUpdateOneRequiredWithoutDietplanInput } from '../client/client-update-one-required-without-dietplan.input';
import { MealUpdateManyWithoutDietplanInput } from '../meal/meal-update-many-without-dietplan.input';

@InputType()
export class DietplanUpdateWithoutCoachInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ClientUpdateOneRequiredWithoutDietplanInput, {nullable:true})
    client?: ClientUpdateOneRequiredWithoutDietplanInput;

    @Field(() => MealUpdateManyWithoutDietplanInput, {nullable:true})
    Meal?: MealUpdateManyWithoutDietplanInput;
}
