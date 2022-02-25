import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ClientUncheckedUpdateOneWithoutUserInput } from '../client/client-unchecked-update-one-without-user.input';
import { NotificationsUncheckedUpdateManyWithoutUserInput } from '../notifications/notifications-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutCoachInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;

    @Field(() => ClientUncheckedUpdateOneWithoutUserInput, {nullable:true})
    client?: ClientUncheckedUpdateOneWithoutUserInput;

    @Field(() => NotificationsUncheckedUpdateManyWithoutUserInput, {nullable:true})
    Notifications?: NotificationsUncheckedUpdateManyWithoutUserInput;
}
