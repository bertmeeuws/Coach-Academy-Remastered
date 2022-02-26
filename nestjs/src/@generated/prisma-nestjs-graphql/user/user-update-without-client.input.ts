import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CoachUpdateOneWithoutUserInput } from '../coach/coach-update-one-without-user.input';
import { NotificationsUpdateManyWithoutUserInput } from '../notifications/notifications-update-many-without-user.input';

@InputType()
export class UserUpdateWithoutClientInput {

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

    @Field(() => CoachUpdateOneWithoutUserInput, {nullable:true})
    coach?: CoachUpdateOneWithoutUserInput;

    @Field(() => NotificationsUpdateManyWithoutUserInput, {nullable:true})
    Notifications?: NotificationsUpdateManyWithoutUserInput;
}
