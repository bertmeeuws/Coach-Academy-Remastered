import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { UserUpdateOneRequiredWithoutClientInput } from '../user/user-update-one-required-without-client.input';
import { InviteUpdateOneWithoutClientInput } from '../invite/invite-update-one-without-client.input';
import { DietplanUpdateManyWithoutClientInput } from '../dietplan/dietplan-update-many-without-client.input';
import { WorkoutUpdateManyWithoutClientInput } from '../workout/workout-update-many-without-client.input';

@InputType()
export class ClientUpdateWithoutCoachInput {

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

    @Field(() => InviteUpdateOneWithoutClientInput, {nullable:true})
    invite?: InviteUpdateOneWithoutClientInput;

    @Field(() => DietplanUpdateManyWithoutClientInput, {nullable:true})
    Dietplan?: DietplanUpdateManyWithoutClientInput;

    @Field(() => WorkoutUpdateManyWithoutClientInput, {nullable:true})
    Workout?: WorkoutUpdateManyWithoutClientInput;
}
