import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MealUncheckedUpdateManyWithoutDietplanInput } from '../meal/meal-unchecked-update-many-without-dietplan.input';

@InputType()
export class DietplanUncheckedUpdateWithoutCoachInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    clientId?: IntFieldUpdateOperationsInput;

    @Field(() => MealUncheckedUpdateManyWithoutDietplanInput, {nullable:true})
    Meal?: MealUncheckedUpdateManyWithoutDietplanInput;
}
