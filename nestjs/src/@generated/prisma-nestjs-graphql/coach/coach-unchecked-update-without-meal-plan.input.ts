import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ClientUncheckedUpdateManyWithoutCoachInput } from '../client/client-unchecked-update-many-without-coach.input';
import { InviteUncheckedUpdateManyWithoutCoachInput } from '../invite/invite-unchecked-update-many-without-coach.input';

@InputType()
export class CoachUncheckedUpdateWithoutMealPlanInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    surname?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ClientUncheckedUpdateManyWithoutCoachInput, {nullable:true})
    clients?: ClientUncheckedUpdateManyWithoutCoachInput;

    @Field(() => InviteUncheckedUpdateManyWithoutCoachInput, {nullable:true})
    Invite?: InviteUncheckedUpdateManyWithoutCoachInput;
}
