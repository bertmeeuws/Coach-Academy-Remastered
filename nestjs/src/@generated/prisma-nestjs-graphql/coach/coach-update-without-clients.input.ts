import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCoachInput } from '../user/user-update-one-required-without-coach.input';

@InputType()
export class CoachUpdateWithoutClientsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    surname?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCoachInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCoachInput;
}
