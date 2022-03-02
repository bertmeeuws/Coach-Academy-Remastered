import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CoachUpdateOneRequiredWithoutDietplanInput } from '../coach/coach-update-one-required-without-dietplan.input';
import { ClientUpdateOneRequiredWithoutDietplanInput } from '../client/client-update-one-required-without-dietplan.input';

@InputType()
export class DietplanUpdateWithoutMealInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => CoachUpdateOneRequiredWithoutDietplanInput, {nullable:true})
    coach?: CoachUpdateOneRequiredWithoutDietplanInput;

    @Field(() => ClientUpdateOneRequiredWithoutDietplanInput, {nullable:true})
    client?: ClientUpdateOneRequiredWithoutDietplanInput;
}
