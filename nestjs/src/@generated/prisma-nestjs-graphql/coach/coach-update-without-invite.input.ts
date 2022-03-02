import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCoachInput } from '../user/user-update-one-required-without-coach.input';
import { ClientUpdateManyWithoutCoachInput } from '../client/client-update-many-without-coach.input';
import { DietplanUpdateManyWithoutCoachInput } from '../dietplan/dietplan-update-many-without-coach.input';

@InputType()
export class CoachUpdateWithoutInviteInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    surname?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCoachInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCoachInput;

    @Field(() => ClientUpdateManyWithoutCoachInput, {nullable:true})
    clients?: ClientUpdateManyWithoutCoachInput;

    @Field(() => DietplanUpdateManyWithoutCoachInput, {nullable:true})
    Dietplan?: DietplanUpdateManyWithoutCoachInput;
}
