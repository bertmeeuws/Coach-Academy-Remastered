import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ClientUpdateManyWithoutCoachInput } from '../client/client-update-many-without-coach.input';
import { InviteUpdateManyWithoutCoachInput } from '../invite/invite-update-many-without-coach.input';
import { DietplanUpdateManyWithoutCoachInput } from '../dietplan/dietplan-update-many-without-coach.input';

@InputType()
export class CoachUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    surname?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ClientUpdateManyWithoutCoachInput, {nullable:true})
    clients?: ClientUpdateManyWithoutCoachInput;

    @Field(() => InviteUpdateManyWithoutCoachInput, {nullable:true})
    Invite?: InviteUpdateManyWithoutCoachInput;

    @Field(() => DietplanUpdateManyWithoutCoachInput, {nullable:true})
    Dietplan?: DietplanUpdateManyWithoutCoachInput;
}