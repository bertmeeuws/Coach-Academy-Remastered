import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ClientUpdateOneWithoutUserInput } from '../client/client-update-one-without-user.input';
import { CoachUpdateOneWithoutUserInput } from '../coach/coach-update-one-without-user.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;

    @Field(() => ClientUpdateOneWithoutUserInput, {nullable:true})
    client?: ClientUpdateOneWithoutUserInput;

    @Field(() => CoachUpdateOneWithoutUserInput, {nullable:true})
    coach?: CoachUpdateOneWithoutUserInput;
}
