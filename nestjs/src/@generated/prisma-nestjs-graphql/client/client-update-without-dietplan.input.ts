import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { UserUpdateOneRequiredWithoutClientInput } from '../user/user-update-one-required-without-client.input';
import { CoachUpdateOneWithoutClientsInput } from '../coach/coach-update-one-without-clients.input';
import { InviteUpdateOneWithoutClientInput } from '../invite/invite-update-one-without-client.input';
import { WorkoutUpdateManyWithoutClientInput } from '../workout/workout-update-many-without-client.input';

@InputType()
export class ClientUpdateWithoutDietplanInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    surname?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    dob?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    number?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    postal?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    city?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutClientInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutClientInput;

    @Field(() => CoachUpdateOneWithoutClientsInput, {nullable:true})
    coach?: CoachUpdateOneWithoutClientsInput;

    @Field(() => InviteUpdateOneWithoutClientInput, {nullable:true})
    invite?: InviteUpdateOneWithoutClientInput;

    @Field(() => WorkoutUpdateManyWithoutClientInput, {nullable:true})
    Workout?: WorkoutUpdateManyWithoutClientInput;
}
