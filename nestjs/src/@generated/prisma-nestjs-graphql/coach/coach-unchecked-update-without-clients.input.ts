import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { InviteUncheckedUpdateManyWithoutCoachInput } from '../invite/invite-unchecked-update-many-without-coach.input';
import { DietplanUncheckedUpdateManyWithoutCoachInput } from '../dietplan/dietplan-unchecked-update-many-without-coach.input';

@InputType()
export class CoachUncheckedUpdateWithoutClientsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    surname?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => InviteUncheckedUpdateManyWithoutCoachInput, {nullable:true})
    Invite?: InviteUncheckedUpdateManyWithoutCoachInput;

    @Field(() => DietplanUncheckedUpdateManyWithoutCoachInput, {nullable:true})
    Dietplan?: DietplanUncheckedUpdateManyWithoutCoachInput;
}
