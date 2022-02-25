import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { CoachUpdateOneRequiredWithoutInviteInput } from '../coach/coach-update-one-required-without-invite.input';

@InputType()
export class InviteUpdateWithoutClientInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    invalidated?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => CoachUpdateOneRequiredWithoutInviteInput, {nullable:true})
    coach?: CoachUpdateOneRequiredWithoutInviteInput;
}
