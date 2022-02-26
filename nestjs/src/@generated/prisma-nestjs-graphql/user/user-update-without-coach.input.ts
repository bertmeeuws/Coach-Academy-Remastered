import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ClientUpdateOneWithoutUserInput } from '../client/client-update-one-without-user.input';
import { NotificationsUpdateManyWithoutUserInput } from '../notifications/notifications-update-many-without-user.input';

@InputType()
export class UserUpdateWithoutCoachInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profile_image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ClientUpdateOneWithoutUserInput, {nullable:true})
    client?: ClientUpdateOneWithoutUserInput;

    @Field(() => NotificationsUpdateManyWithoutUserInput, {nullable:true})
    Notifications?: NotificationsUpdateManyWithoutUserInput;
}
